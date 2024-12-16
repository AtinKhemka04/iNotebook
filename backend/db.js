const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://atinkhemka:GUux5tZ0O7TTBJat@inotebook-db.1mwau.mongodb.net/?retryWrites=true&w=majority&appName=inotebook-db";
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
