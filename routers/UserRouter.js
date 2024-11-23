const express = require("express");
const router = express.Router();
const singUp = require("../controllers/UserController");
const getUsers = require("../controllers/UserController");
const UpdateUser = require("../controllers/UserController");
const DeleteUser = require("../controllers/UserController");

router.post("/sign-up", singUp);
router.get("/users", getUsers);
router.put("/update", UpdateUser);
router.post("/delete", DeleteUser);

module.exports = router;
