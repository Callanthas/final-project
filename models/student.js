const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  studentID: { type: String, required: true },
  project: { type: String, required: true },
  organization: { type: String, default: "" },
  hours: { type: Number, default: 0 },
  university: { type: String, default: "", required: true },
  area: { type: String, default: "" },
  checkIn: { type: Date },
  checkOut: { type: Date }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
