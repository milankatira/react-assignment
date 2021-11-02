const mongoose = require("mongoose");

const Product = mongoose.model("Product");

exports.adminpanel = (req, res) => {
  res.json({ message: "admin panel here" });
};

exports.addproduct = (req, res) => {
  const { name, description, price, items, photo } = req.body;
  const product = new Product({
    name,
    description,
    photo,
    price,
    items,
  });

  product
    .save()
    .then((product) => {
      res.status(200).json({ message: "product save successfully" });
    })
    .catch((err) => {
      res.status(401).json({ error: err.message });
    });
};

exports.deleteproduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((product) => res.json("User deleted Successfully"))
    .catch((error) => {
      res.json({ message: error.message });
    });

  try {
    Product.deleteOne({ _id: req.params.id });
    res.status(201).json("Product deleted Successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.editproduct = async (req, res) => {
  
const { name, description, price, items, photo } = req.body;
const editproduct = new Product({
  name,
  description,
  photo,
  price,
  items,
});
  
  let product = await Product.findById(req.params.id);
  product
    .updateOne(editproduct)
    .then((result) => {
      res.status(201).json(result);
    })

    .catch((error) => {
      res.status(409).json({ message: error.message });
    });
};

exports.getproductById = (req, res) => {
  const product = Product.findById(req.params.id)
    .then((result) => {
      res.status(201).json(result)
    })

    .catch((error) => {
      res.status(404).json({ error_messages: error.message });
    });
    
};

exports.getproduct = (req, res) => {
  Product.find()
    .then((product) => {
      res.json({ product });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
