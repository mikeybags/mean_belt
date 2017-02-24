console.log("mongoose here...remember our bikes?");

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean_belt');

require('../models/models');
