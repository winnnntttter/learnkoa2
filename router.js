const router = require("koa-router")();
const HomeController = require("./controller/home");
const ApiController = require("./controller/api");
module.exports = app => {
  router.get("/", HomeController.index);
  router.get("/login", HomeController.login);
  router.post("/user/register", HomeController.register);

  router.get("/getUser", ApiController.user);
  app.use(router.routes()).use(router.allowedMethods());
};
