const mongoose = require("mongoose");

const User = mongoose.model("User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const { JWT_KEY } = require("../keys");

exports.signup = (req, res) => {
  const { name, email, password, role } = req.body;

  bcrypt
    .hash(password, 12)
    .then((hashedpassword) => {
      const user = new User({
        name,
        email,
        password: hashedpassword,
        role,
      });
      user
        .save()
        .then((user) => {
          res.json({ message: "saved successfully" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log("---------------------------------", err);
    });
};

exports.login = (req, res) => {
  const { email, password, } = req.body;

  User.findOne({ email: email }).then((savedUser) => {
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign({ _id: savedUser._id }, JWT_KEY);
          const { _id, password, email, role } = savedUser;
          res.json({ token, user: { _id, password, email, role } });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
