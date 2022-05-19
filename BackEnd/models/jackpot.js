const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jackpotSchema = new Schema({
  jackPotId: { type: Number, required: true },
  name: {type: String, required: true},
  date: {type: String, required: true},
  participants: [{ type: String, required: true }],
},{timestamps: true}
);

module.exports = mongoose.model("Jackpot", jackpotSchema);