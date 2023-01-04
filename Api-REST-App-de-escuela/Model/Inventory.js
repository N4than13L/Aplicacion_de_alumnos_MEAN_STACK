"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InventorySchema = Schema({
  marca: String,
  cantidad: Number,
  tipo: String,
  description: String,
});

module.exports = mongoose.model("Inventory", InventorySchema);
