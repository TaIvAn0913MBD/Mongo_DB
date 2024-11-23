const userModel = require("../UserModel");

DeleteUser = async (req, res) => {
  try {
    let DeleteUser = req.body;
    console.log(DeleteUser);
    await userModel.findOneAndDelete({ email: DeleteUser.email });
    res.send("deleted");
  } catch (error) {
    console.log(error);
    res.send("errors");
  }
};

getUsers = async (req, res) => {
  const users = await userModel.find({});
  res.status(200).send(users);
};

UpdateUser = async (req, res) => {
  try {
    let user = req.body;
    console.log(user);
    await userModel.findOneAndUpdate(
      { email: user.email },
      {
        username: user.username,
        email: user.email,
        age: user.age,
        password: user.password,
      }
    );
    res.send("done");
  } catch (error) {
    console.log(error);
    res.send(`Failed to update`);
  }
};

singUp = async (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    const response = await userModel.create(user);
    console.log(response);
    const _ID = response._id;
    console.log(_ID.toString());
    res.send(`success`);
  } catch (error) {
    console.log(error);
    res.send("error");
  }
};

module.exports = singUp;
module.exports = getUsers;
module.exports = UpdateUser;
module.exports = DeleteUser;
