const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendenceSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    eid: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendence", attendenceSchema);
