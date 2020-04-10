const Attendence = require("../../model/attendence");

module.exports = {
  createAttendence: async (args) => {
    try {
      const newAttendence = await Attendence({
        type: args.type,
        eid: args.eid,
      });
      const result = await newAttendence.save();
      return { ...result._doc, time: result._doc.createdAt };
    } catch (e) {
      throw new Error(e);
    }
  },
  attendence: async (args) => {
    try {
      const attendences = await Attendence.find().sort({ _id: 1 }).limit(10);
      return attendences.map((attendence) => {
        // console.log(...attendence);
        return { ...attendence._doc, time: attendence._doc.createdAt };
      });
    } catch (err) {
      throw new Error(err);
    }
  },
};
