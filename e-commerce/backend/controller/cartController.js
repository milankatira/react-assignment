const mongoose = require('mongoose')

const Cart=mongoose.model("Cart");

exports.cartitem=(req,res)=>{
    const { name, description, price, items, photo } = req.body;
    const cart = new Cart({
      name,
      description,
      photo,
      price,
      items,
    });
  
    cart
      .save()
      .then((product) => {
        res.status(200).json({ message: "product added successfully" });
      })
      .catch((err) => {
        res.status(401).json({ error: err.message });
      });
}

exports.getproduct = (req, res) => {
  Cart.find()
    .then((product) => {
      res.json({ product });
    })
    .catch((err) => {
      console.log(err.message);
    });
};


exports.deleteproduct = (req, res) => {
Cart.deleteOne({ _id: req.params.id })
    .then((product) => res.json("User deleted Successfully"))
    .catch((error) => {
      res.json({ message: error.message });
    });

  try {
    Cart.deleteOne({ _id: req.params.id });
    res.status(201).json("Product deleted Successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};