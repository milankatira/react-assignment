const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  items: {
    type: Number,
    required: true,
  },
});

autoIncrement.initialize(mongoose.connection);

productSchema.plugin(autoIncrement.plugin, "Product");

mongoose.model("Product", productSchema);
