const HomeService = require("../service/home");
module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`;
  },
  home: async (ctx, next) => {
    ctx.response.body = `<h1>home page</h1>`;
  },
  homeParams: async (ctx, next) => {
    console.log(ctx.params, ctx.query, ctx.querystring, ctx.request.params);
    ctx.response.body = `<h1>index page ${ctx.params.id}</h1>`;
  },
  login: async (ctx, next) => {
    ctx.response.body = `
      <form action="/user/register" method="post">
        <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
        <br/>
        <input name="password" type="text" placeholder="请输入密码：123456"/>
        <br/> 
        <button>GoGoGo</button>
      </form>
    `;
  },
  // 重写 register 方法
  register: async (ctx, next) => {
    let { name, password } = ctx.request.body;
    let data = await HomeService.register(name, password);
    ctx.response.body = data;
  }
};
