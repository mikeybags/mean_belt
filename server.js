var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8000, function(){
  console.log('Server running on port 8000...')
});
