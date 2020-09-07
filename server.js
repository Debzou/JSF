const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.post("/download", (req, res) => {
  console.log("req.body", req.body);

  const svg = req.body.svg;
  console.log("svg", svg);
  fs.writeFile("cardName.svg", svg, function (err) {
    if (err) return console.log(err);
    console.log("Card Created");
  });
});

//add the router
app.use("/", router);
app.use(express.static(__dirname));

app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
