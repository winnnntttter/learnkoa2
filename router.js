const router = require("koa-router")();
// const HomeController = require("./controller/home");
// const ApiController = require("./controller/api");
module.exports = app => {
  router.get("/", app.controller.home.index);
  router.get("/login", app.controller.home.login);
  router.post("/user/register", app.controller.home.register);

  router.get("/getUser", app.controller.api.user);
  app.use(router.routes()).use(router.allowedMethods());
};
