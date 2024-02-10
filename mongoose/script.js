const mongoose = require("mongoose");
const User = require("./User");

main().catch((error) => console.log(error.message));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
  const user = await User.where("name")
    .equals("kyle")
    .where("age")
    .lt(35)
    .limit(2)
    .populate("bestFriend");

  //   user[0].bestFriend = "65c7431904a1dbfaab1e6071";
  //   await user[0].save();

  console.log(user);
}
