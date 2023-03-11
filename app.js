require('dotenv').config()
const express = require('express')
const connecttodb = require('./config/db')
const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    connecttodb()
    console.log(`app is listining on port ${PORT}`);
})