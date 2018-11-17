const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
const EmployeeSchema = new Schema({
  employee_id: {
    type: String,
    trim: true,
    required: "ID is Required"
  },
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },
  department: {
    type: String,
    enum: ['HR', 'IT', 'Marketing', 'Executive']
  }
});

const Employee = mongoose.model("User", EmployeeSchema);

module.exports = Employee;
