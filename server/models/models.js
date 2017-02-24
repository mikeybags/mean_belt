console.log("Hi Models here...don't tell your gf")

var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  username: {type: String, required: [true, 'Username cannot be blank'], unique: true},
}, {timestamps: true});

var QuestionSchema = new mongoose.Schema({
  question : {type: String, required: [true, 'Question cannot be blank'], minlength: [8, 'Question must be at least 8 characters']},
  posted_by : {type: String},
  _options: [{type: mongoose.Schema.Types.ObjectId, ref: "Option"}]
}, {timestamps: true})

var OptionSchema = new mongoose.Schema({
  option: {type: String, required: [true, 'Option field cannot be blank'], minlength: [3, 'Option must be at least 3 characters']},
  votes: {type: Number, default: 0}
})

mongoose.model('User', UserSchema);
mongoose.model('Question', QuestionSchema);
mongoose.model('Option', OptionSchema);
