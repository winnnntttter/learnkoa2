const Koa = require("koa");
// 注意 require('koa-router') 返回的是函数:
const router = require("koa-router")();
const app = new Koa();

// 添加路由
// 省略了 await next()（因为没有其他中间件需要执行，所以这里就先省略了）。
router.get("/", async (ctx, next) => {
  ctx.response.body = `<h1>index page</h1>`;
});

router.get("/home", async (ctx, next) => {
  ctx.response.body = "<h1>HOME page</h1>";
});

router.get("/404", async (ctx, next) => {
  ctx.response.body = "<h1>404 Not Found</h1>";
});

// 调用路由中间件
app.use(router.routes());

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
