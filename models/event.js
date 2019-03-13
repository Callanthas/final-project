const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  hours: { type: Number, default: 0 }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
