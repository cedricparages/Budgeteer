const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
  earning: { type: String, required: true },
  incomeAmount: { type: Number, required: true },
});

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;