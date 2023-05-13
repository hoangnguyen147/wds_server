const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
require("./src/databases/initDB");
const router = require("./src/router");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(
  cors({
    origin: "*",
  })
);

app.use(router);

const PORT = 3000;

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello world".repeat(500000),
  });
});

app.listen(PORT, () => {
  console.log("Server is listening v2");
});
