const koa = require("koa");
const app = new koa();

// app.use 的async函数就是中间件
app.use(async (ctx, next) => {
  await next();
  ctx.response.type = "text/html";
  ctx.response.body = "<h3>Hello</h3>";
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
