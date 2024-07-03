const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");

const jwt_secret = "This is inotebook created by Atin";

//Route 1: Create a user using: POST "/auth/createuser".
router.post(
  "/createuser",
  [
    body("name", "Enter a valid Name").isLength({ min: 4 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Must be atleat 5 Characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if errors, return Bad Request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }

    //check weather user with this email exist or not
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res.status(400).json({
          success,
          error: "Sorry user with this email already exists!!",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, jwt_secret);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 2: Authenticate a user using: POST "/auth/login".
router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", " Password cannot be blank").exists(),
  ],
  async (req, res) => {
    //if errors, return Bad Request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({
            success,
            error: "Please try to login with Correct Credentials",
          });
      }

      const passwordcomp = await bcrypt.compare(password, user.password);
      if (!passwordcomp) {
        success = false;
        return res
          .status(400)
          .json({
            success,
            error: "Please try to login with Correct Credentials",
          });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, jwt_secret);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 3: Get loged in user  details using: POST "/api/getuser".
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Intrenal server error");
  }
});

module.exports = router;
