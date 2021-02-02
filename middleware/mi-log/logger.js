const log4js = require("log4js");
const methods = ["trace", "debug", "info", "warn", "error", "fatal", "mark"];

module.exports = () => {
  const contextLogger = {};
  const config = {
    appenders: {
      cheese: {
        type: "dateFile", // 日志类型
        filename: `logs/task`, // 输出的文件名
        pattern: "-yyyy-MM-dd.log", // 文件名增加后缀
        alwaysIncludePattern: true // 是否总是有后缀名
      }
    },
    categories: {
      default: {
        appenders: ["cheese"],
        level: "info"
      }
    }
  };

  const logger = log4js.getLogger("cheese");

  return async (ctx, next) => {
    // 记录请求开始的时间
    const start = Date.now();
    log4js.configure(config);

    // 循环methods将所有方法挂载到ctx 上
    methods.forEach((method, i) => {
      contextLogger[method] = message => {
        logger[method](message);
      };
    });
    ctx.log = contextLogger;

    await next();
    // 记录完成的时间 作差 计算响应时间
    const responseTime = Date.now() - start;
    logger.info(`响应时间为${responseTime / 1000}s`);
  };
};
