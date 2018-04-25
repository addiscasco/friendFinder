var express = require('express');
var app = express();
var bodyParser = require('body-parser');
   
app.listen(3000);

// be able to use statc css content and a reference to the public folder & express.static use express to statically serve the file (must require path). You can see this at the top of the page of express files
//app.use = anytime there's request statically give them what's in the public folder
app.use(express.static(__dirname,'public'));

  