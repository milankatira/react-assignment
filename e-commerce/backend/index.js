const express = require("express");

const app = express();

const stripe = require("stripe")(
  "pk_test_51JSZd2SDMIjp98GYMfBUabQ5D1jZiFUKm9gmu4W9EExUNEtVJnfa3oV2Mrgd3ojZJZz7qfrBNwBxEAy4xWsrmSBr00gnR9jyAD "
);

const uuid=require("uuid");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost/login";

const cors = require("cors");
const { default: Stripe } = require("stripe");

const PORT = 5000;

require("./database/user");

require("./database/product");

require('./database/cart')

app.use(express.json());

const corsOptions = {
  origin: "http://localhost/3000/",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./routes/Userauth"));

app.use(require("./routes/admin"));

app.use(require("./routes/user"));

app.use(require('./routes/cart'))

app.get("/", (req, res) => {
  console.log("hello");
  res.send("hello");
});

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
