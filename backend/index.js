const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
//available routes
app.use("/auth", require("./routes/auth"));
app.use("/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.listen(port, () => {
  console.log(`Inotebook app listening at http://localhost:${port}`);
});
