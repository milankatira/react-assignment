
const stripe = require('stripe')(
  "sk_test_51JSZd2SDMIjp98GYahnSHNovmNwMYOO054a1cf9PbbNcgedHNpewc5DO7L3G83YK6E6E4FFERP3KafIXTyOXpNjL00zwOr49Yf"
  )

exports.userpanel = (req, res) => {
  res.json({ message: "user panel here" });
};

const mongoose = require("mongoose");

const Product = mongoose.model("Product");

exports.buyproduct = (req, res) => {
  Product.find()
    .then((product) => {
      res.json({ product });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.payment = (req, res) => {
  const { token, product } = req.body;
  console.log("product--", product);
  console.log("price---", product.price);
  const idempontencyKey = uuid();

  return stripe.customers
    .create({
      email: token,
      source: token.id,
    })
    .then((customer) => {
      string.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: product.name,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_count,
              ry,
            },
          },
        },
        { idempontencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log("error", err));
};
