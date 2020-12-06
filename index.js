const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  console.log("You visited /");
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`Started server on port: ${PORT}`));
