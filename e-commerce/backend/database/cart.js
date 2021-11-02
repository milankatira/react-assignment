const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const cartSchema = new mongoose.Schema({
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
  
})
autoIncrement.initialize(mongoose.connection);

cartSchema.plugin(autoIncrement.plugin, "Product");
mongoose.model("Cart", cartSchema)
