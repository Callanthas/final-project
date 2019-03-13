const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, required: true },
  organization: { type: String, default: "" },
  area: { type: String, default: "" },
  supervisor: { type: String, default: "" },
  students: { type: Array, default: [] }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
