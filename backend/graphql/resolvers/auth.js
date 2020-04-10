const bcrypt = require("bcryptjs");
const User = require("../../model/user");
module.exports = {
  createUser: async (args) => {
    try {
      const existingUser = await User.findOne({
        $or: [{ email: args.userInput.email }, { eid: args.userInput.eid }],
      });
      if (existingUser) {
        throw new Error("user already exists");
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
      const newUser = new User({
        email: args.userInput.email,
        password: hashedPassword,
        firstName: args.userInput.firstName,
        lastName: args.userInput.lastName,
        phone: args.userInput.phone,
        addrs: args.userInput.addrs,
        eid: args.userInput.eid,
        designation: args.userInput.designation,
        type: args.userInput.type,
      });
      const result = await newUser.save();
      return { ...result._doc, password: null };
    } catch (err) {
      throw new Error(err);
    }
  },
  users: async () => {
    const users = await User.find();
    return users.map((user) => {
      return { ...user._doc, password: null };
    });
  },
};
