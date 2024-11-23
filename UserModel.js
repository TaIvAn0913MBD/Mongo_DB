const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  username: { type: String, require: true },
  age: { type: Number, require: true },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
