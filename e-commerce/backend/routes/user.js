const express = require("express");

const router = express.Router();

const user = require("../controller/userController");

router.get("/user", user.userpanel);

router.get("/user/buyproduct", user.buyproduct);

router.post("/payment", user.payment);

module.exports = router;
