const { string } = require("joi");
const mongoose = require("mongoose");
//in order to create schema

const cregSchema = mongoose.Schema({
  coursename: String,
  courseid: Number,
  courseduration: Number,
  coursefee: Number,
});
const CModel = mongoose.model("Product", cregSchema);
module.exports = CModel;
