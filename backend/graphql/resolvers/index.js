const authResolver = require("./auth");
const updateResolver = require("./update");
const attendenceResolver = require("./attendence");
const rootResolver = {
  ...authResolver,
  ...updateResolver,
  ...attendenceResolver,
};

module.exports = rootResolver;
