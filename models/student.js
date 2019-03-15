const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  studentID: { type: String, required: true },
  project: { type: String, required: true },
  hours: { type: Number, default: 0 },
  university: { type: String, required: true },
  checkIn: { type: Date },
  checkOut: { type: Date }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
