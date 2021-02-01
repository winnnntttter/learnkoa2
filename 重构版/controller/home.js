const HomeService = require("../service/home");
module.exports = {
  // ……省略上面代码
  // 重写 register 方法
  register: async (ctx, next) => {
    let { name, password } = ctx.request.body;
    let data = await HomeService.register(name, password);
    ctx.response.body = data;
  }
};
