var express = require('express');
var app = express();
var bodyParser = require('body-parser');
   
app.listen(3000);

app.use(express.static('public'));

  