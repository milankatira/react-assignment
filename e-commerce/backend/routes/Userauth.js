const express = require("express");

const auth = require("../controller/authController");

const validation = require("../validators/signupValidators");

const router = express.Router();

// router.get("/");

router.post("/signup", [validation.Signup], auth.signup);

router.post(
  "/login",
  [validation.Login, validation.LoginEmailValidation],
  auth.login
);

module.exports = router;
