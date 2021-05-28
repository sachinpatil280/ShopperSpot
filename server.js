const express = require("express");
const app = express();
const cors = require("cors");
const TokenGenerator = require("uuid-token-generator");

app.use(cors());

const tokgen = new TokenGenerator(256, TokenGenerator.BASE62);

app.use("/login", (req, res) => {
  res.send({
    token: tokgen.generate(),
  });
});

app.listen(3000, () =>
  console.log("API is running on http://localhost:3000/login")
);
