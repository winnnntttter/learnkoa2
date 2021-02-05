// const ApiService = require("../service/api");
module.exports = {
  user: async (ctx, next) => {
    const { app } = ctx;
    let query = ctx.query;
    let res = await app.service.api.getUser(query.name, query.password);
    await ctx.send({
      status: res.status === -1 ? "fail" : "success",
      data: res.data
    });
  }
};
