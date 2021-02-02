const ApiService = require("../service/api");
module.exports = {
  user: async (ctx, next) => {
    let query = ctx.query;
    let res = await ApiService.getUser(query.name, query.password);
    await ctx.send({
      status: res.status === -1 ? "fail" : "success",
      data: res.data
    });
  }
};
