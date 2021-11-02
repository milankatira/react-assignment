const JoiBase = require("@hapi/joi");

const JoiPhone = require("joi-phone-number");

const joi = JoiBase.extend(JoiPhone);

const mongoose = require("mongoose");

const User = mongoose.model("User");

exports.Login = async (req, res, next) => {
  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20).required(),
  });

  try {
    const result = await schema.validateAsync(packet);
    if (result) {
      next();
    }
  } catch (error) {
    return res.status(400).json({
      error_type: "VALIDATION_ERROR",
      error_message: error.details[0].message,
    });
  }
};

exports.Signup = async (req, res, next) => {
  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    name: joi.string().min(3).max(10).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20).required(),
    role:joi.string().required(),
  });

  try {
    const result = await schema.validateAsync(packet);
    if (result) {
      next();
    }
  } catch (error) {
    return res.status(400).json({
      error_type: "VALIDATION_ERROR",
      error_message: error.details[0].message,
    });
  }
};

exports.LoginEmailValidation = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(422).json({ error: "Invalid Email or password" });
    } else {
      next();
    }
  } catch (error) {
    res.status(201).send(error.message);
  }
};
