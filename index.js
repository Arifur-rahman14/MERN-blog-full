const express = require("express");
const bodyParser = require('body-parser');
const connect = require("./config/db");
const router = require("./routes/userRoutes");
require('dotenv').config();
const app = express();

// connect mongo
connect();

app.use(bodyParser.json());
app.use('/', router);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log('your app is running');
});
