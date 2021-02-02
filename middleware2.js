// 按照官方示例
const Koa = require("koa");
const app = new Koa();

// 记录执行的时间
app.use(async (ctx, next) => {
  let stime = new Date().getTime();
  await next();
  let etime = new Date().getTime();
  ctx.response.type = "text/html";
  ctx.response.body = "<h1>Hello World</h1>";
  console.log(`请求地址: ${ctx.path}，响应时间：${etime - stime}ms`);
});

app.use(async (ctx, next) => {
  console.log("中间件1 doSomething");
  await next();
  console.log("中间件1 end");
});

app.use(async (ctx, next) => {
  console.log("中间件2 doSomething");
  await next();  // 不加await 先执行console.log("中间件2 end");再执行3 end，再1 end  而如果中间件没有调用 await next()，『后面的中间件将不会执行』。
  console.log("中间件2 end");
});

app.use(async (ctx, next) => {
  console.log("中间件3 doSomething");
  await next();
  console.log("中间件3 end");
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

// 先进后出，洋葱模型
// 中间件1 doSomething
// 中间件2 doSomething
// 中间件3 doSomething
// 中间件3 end
// 中间件2 end
// 中间件1 end
// 请求地址: /，响应时间：4ms
