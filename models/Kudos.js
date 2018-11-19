const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
var KudosSchema = new Schema({
  title: String,
  body: String,

  employeeTo: {
    type: Schema.Types.ObjectId,
    ref: "Employee"
  },

  employeeFrom: {
    type: Schema.Types.ObjectId,
    ref: "Employee"
  }
});

const Kudos = mongoose.model("Kudos", KudosSchema);

module.exports = Kudos;