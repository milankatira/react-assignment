const express = require("express");
const router = express.Router();

const admin = require("../controller/adminController");

router.get("/admin/product", admin.getproduct);
router.get("/admin/product/:id", admin.getproductById);

router.post("/admin/addproduct", admin.addproduct);
router.put("/admin/editproduct/:id", admin.editproduct);
router.delete("/admin/product/:id", admin.deleteproduct);

module.exports = router;
