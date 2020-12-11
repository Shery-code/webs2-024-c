const mongoose = require("mongoose");

const URI =
  "mongodb://sheryyyyy:shery123@cluster0-shard-00-00.onvnt.mongodb.net:27017,cluster0-shard-00-01.onvnt.mongodb.net:27017,cluster0-shard-00-02.onvnt.mongodb.net:27017/coursereg?ssl=true&replicaSet=atlas-r4tiq9-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected..");
};

module.exports = connectDB;
