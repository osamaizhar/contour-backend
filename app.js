require("dotenv").config();
const express = require("express");
const connecttodb = require("./config/db");
const bodyParser = require("body-parser");
const router = require("./router/router");
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use("/user/", router);
var corsOptions = {
    origin: '*'
}
app.use(cors(corsOptions));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connecttodb();
  console.log(`app is listining on port ${PORT}`);
});
