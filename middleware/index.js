const path = require("path");
const bodyParser = require("koa-bodyparser");
const staticFiles = require("koa-static");
const views = require("koa-views");
const miSend = require("./mi-send");
const miLog = require("./mi-log");
const ip = require("ip");
module.exports = app => {
  app.use(
    miLog({
      env: app.env, // koa 提供的环境变量
      projectName: "koa2-tutorial",
      appLogLevel: "debug",
      dir: "logs",
      serverIp: ip.address()
    })
  );
  app.use(bodyParser());
  app.use(staticFiles(path.resolve(__dirname, "../public")));
  app.use(views("views", { map: { html: "ejs" } })); //(这样配置，后缀名为.html)
  /* app.use(
    views("views", {
      //(后缀名为.ejs)
      extension: "ejs" //应用ejs模板引擎
    })
  ); */
  // 通过中间件为每个ejs引擎赋值
  app.use(async (ctx, next) => {
    ctx.state.userName = "张三";
    await next();
  });
  app.use(miSend());
};
