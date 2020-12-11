var express = require("express");
var router = express.Router();
const CModel = require("../models/schema");
/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await CModel.find(); //products
  //console.log(products);
  res.render("product/list", { title: "Edureka's Course List", products });
});

router.get("/add", async function (req, res, next) {
  res.render("product/add");
});

router.post("/add", async function (req, res, next) {
  let product = new CModel(req.body);
  await product.save();
  res.redirect("/product");
});

router.get("/delete/:id", async function (req, res, next) {
  let product = await CModel.findByIdAndDelete(req.params.id);
  res.redirect("/product");
  //res.send("/product/delete/"+req.params.id);
});

router.get("/edit/:id", async function (req, res, next) {
  let product = await CModel.findById(req.params.id);
  res.render("product/edit", { product });
});

router.post("/edit/:id", async function (req, res, next) {
  let product = await CModel.findById(req.params.id);
  product.coursename = req.body.name;
  product.courseid = req.body.id;
  product.courseduration = req.body.duration;
  product.coursefee = req.body.fee;
  await product.save();
  res.redirect("/product");
});
module.exports = router;
