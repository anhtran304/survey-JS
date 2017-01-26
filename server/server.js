require('./config/config');
const path = require('path');
const http = require('http');
const express = require('express');

var port = process.env.PORT;
const publicPath = path.join(__dirname, '../public');
var app = express();


app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
