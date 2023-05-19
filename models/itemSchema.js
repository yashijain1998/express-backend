const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  'Barcode': Number,
  'Item Description': String,
  'Group Name': String,
  'Size': String,
  'Price': Number,
  'Qty': Number,
  'Profit': Number,
  'RemainingQty': Number
})

const Item = mongoose.model("item", itemSchema);

module.exports = Item;