const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UpdateSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Updates", UpdateSchema);
