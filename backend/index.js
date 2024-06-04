const connectToMongo = require("./db");
const express = require("express");
connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());
//available routes
app.use("/auth", require("./routes/auth"));
app.use("/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello Atin!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});