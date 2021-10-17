require("dotenv").config();
const express = require("express");
const serveIndex = require("serve-index");
const app = express();

const port = process.env.PORT;
const static = process.env.STATIC_PATH

app.use("/data", express.static(static));
app.use('/data', serveIndex(static));

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`server runnning at port ${port}`);
});