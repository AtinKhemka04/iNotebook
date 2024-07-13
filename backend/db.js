const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://atinkhemka:Ak@123456@cluster0.kw0guqn.mongodb.net/inotebook";
const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};
module.exports = connectToMongo;
