var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  username: {type: String, required: [true, 'Username cannot be blank!'], unique: true},
}, {timestamps: true});

mongoose.model('User', UserSchema);
