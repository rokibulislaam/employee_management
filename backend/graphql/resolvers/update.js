const Update = require("../../model/update");
module.exports = {
  createUpdate: async (args) => {
    try {
      const newUpdate = new Update({
        message: args.message,
      });
      const result = await newUpdate.save();
      return { ...result._doc };
    } catch (err) {
      throw new Error(err);
    }
  },
  getUpdates: async () => {
    try {
      const updates = await Update.find().sort({ _id: 1 }).limit(10);
      return updates.map((update) => {
        return { ...update._doc };
      });
    } catch (err) {
      throw new Error(err);
    }
  },
};
