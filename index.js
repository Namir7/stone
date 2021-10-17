require("dotenv").config();
const express = require("express");
const serveIndex = require("serve-index");
const port = process.env.PORT || 5000;
const static = process.env.STATIC_PATH;
const app = express();

const authMiddleWare = require("./middleware/authMiddleware");
const authRouter = require("./authRouter");

app.use(express.static(`${__dirname}/client`));
app.use("/data", express.static(static));
app.use("/data", serveIndex(static));
app.use(authMiddleWare);
app.use(express.json());
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`server runnning at port ${port}`);
});
