module.exports = {
  getUser: async function (name, pwd) {
    let data;
    if (name == "ikcamp" && pwd == "123456") {
      data = {
        status: 0,
        data: {
          name,
          pwd
        }
      };
    } else {
      data = {
        status: -1,
        data: {
          name,
          pwd
        }
      };
    }
    return data;
  }
};
