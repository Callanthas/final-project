const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supervisorSchema = new Schema({
  name: { type: String, required: true },
  projects: { type: Array, default: [] },
  organization: { type: String, default: "", required: true },
  area: { type: String, default: "" }
});

const Supervisor = mongoose.model("Supervisor", supervisorSchema);

module.exports = Supervisor;
