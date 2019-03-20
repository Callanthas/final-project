const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supervisorSchema = new Schema({
  name: { type: String, required: true },
  organization: { type: String, default: "", required: true },
  project: { type: String, default: "", required: true },
  area: { type: String, default: "", required: true }
});

const Supervisor = mongoose.model("Supervisor", supervisorSchema);

module.exports = Supervisor;
