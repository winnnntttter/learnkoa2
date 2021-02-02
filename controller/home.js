const HomeService = require("../service/home");
module.exports = {
  index: async (ctx, next) => {
    await ctx.render("index", { title: "iKcamp欢迎您" });
  },
  login: async (ctx, next) => {
    await ctx.render("login", { title: "登录", content: "" });
  },
  // 重写 register 方法
  register: async (ctx, next) => {
    let params = ctx.request.body;
    let name = params.name;
    let password = params.password;
    let res = await HomeService.register(name, password);
    if (res.status == "-1") {
      await ctx.render("login", res.data);
    } else {
      ctx.state.title = "个人中心";
      await ctx.render("success", res.data);
    }
  }
};
