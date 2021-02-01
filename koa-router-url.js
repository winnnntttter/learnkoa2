const Koa = require("koa");
const router = require("koa-router")();
const app = new Koa();

// 设置此路由名称为user
router.get("user", "/users/:id", (ctx, next) => {
  // http://localhost:3000/users/222
  console.log(ctx.params, ctx.query, ctx.request.params); // { id: '222' } [Object: null prototype] {} { id: '222' }
  ctx.response.body = `<h1>index page ${ctx.params.id}</h1>`;
});

// router.url 方法方便我们在代码中根据路由名称和参数(可选)去生成具体的 URL，而不用采用字符串拼接的方式去生成 URL 了。
router.url("user", 3);
//通过调用路由名称user， 生成路由 "/users/3"

router.url("user", { id: 3 });
// => 生成路由 "/users/3"

router.use((ctx, next) => {
  // 重定向到路由名称为 “sign-in” 的页面
  ctx.redirect(ctx.router.url("sign-in"));
});

// 调用路由中间件
app.use(router.routes());

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
