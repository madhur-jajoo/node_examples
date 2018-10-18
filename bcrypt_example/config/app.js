const express = require("express");
const bodyParser = require("body-parser");
const app = express();

require("./../models");
const User = require("mongoose").model("User");

require("./mongoose");

/* for parsing json data */
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.send("You hit the home route");
});

app.post("/user/login", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      if (await user.comparePassword(req.body.password)) {
        res.json({ success: true, user: user });
      } else throw new Error("Password mismatch");
    } else throw new Error(`Error finding email ${req.body.email}`);
  } catch (err) {
    res.json({
      success: false,
      message: err.error || err.message || err
    });
  }
});

app.post("/user", async (req, res) => {
  try {
    let user = await new User({
      email: req.body.email,
      password: req.body.password
    });

    await user.save();
    if (user) {
      res.json({
        success: true,
        user: user
      });
    } else throw new Error(`Error creating user : ${err.error}`);
  } catch (err) {
    res.json({
      success: false,
      message: err.error || err.message || err
    });
  }
});

module.exports = function() {
  return app;
};
