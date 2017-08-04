var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Option = mongoose.model('Option');

module.exports = {
  login: function (request, response) {
    User.findOne({username: request.body.username}, function (err, user) {
      if (user) {
        response.json(user)
      } else {
        User.create(request.body, function (err, user) {
          if (err) {
            console.log("Error Creating User: ", err);
          } else {
            console.log("User Created!");
            response.json(user);
          }
        });
      }
    });
  },
  dashboard: function (request, response) {
    Question.find({}, function (err, questions) {
      if (err) {
        console.log("Error finding questions:", err);
        response.json(err);
      } else {
        response.json(questions);
      }
    });
  },
  createQuestion: function (request, response) {
    console.log("Request body is: ", request.body)
    var optionsArr = [];
    User.findOne({_id: request.body.user_id}, function (err, user) {
      if (err) {
        console.log("Error:", err)
        response.json(err);
      } else {
        Question.create({question: request.body.question, posted_by: user.username}, function (err, question) {
          if (err) {
            console.log("Error:", err)
          } else {
            for (option in request.body.newOptions) {
              optionsArr.push(request.body.newOptions[option])
              console.log(optionsArr);
            }
            Option.create({option: optionsArr[0]}, function (err, option1) {
              if (err) {
                console.log("Error", err)
              } else {
                Option.create({option: optionsArr[1]}, function (err, option2) {
                  if (err) {
                    console.log("Error", err)
                  } else {
                    Option.create({option: optionsArr[2]}, function (err, option3) {
                      if (err) {
                        console.log("Error", err)
                      } else {
                        Option.create({option: optionsArr[3]}, function (err, option4) {
                          if (err) {
                            console.log("Error", err)
                          } else {
                            question._options.push(option1);
                            question._options.push(option2);
                            question._options.push(option3);
                            question._options.push(option4);
                            question.save();
                            response.json(question);
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        });
      }
    });
  },
  showOneQuestion: function (request, response) {
    Question.findOne({_id: request.params.id}).populate('_options').populate({path: 'options', populate: {path:'votes'}}).exec(function(err, question) {
      if (err) {
        console.log("Error finding question:", err);
        response.json(err);
      } else {
        response.json (question);
      }
    })
  },
  addVote: function (request, response) {
    Option.findOne({_id: request.body.option_id}, function (err, option) {
      if (err) {
        console.log("Error finding option:", err);
        response.json(err);
      } else {
        option.votes += 1;
        option.save(err);
        if (err) {
          console.log("Error adding vote:", err);
          response.json(err);
        } else {
          response.json(option);
        }
      }
    })
  },
  deleteQuestion: function (request, response) {
    Question.remove({_id: request.params.id}, function (err, data) {
      if (err) {
        console.log("Error removing question:", err);
        response.json(err);
      } else {
        console.log("Data from successful delete:", data);
        response.json(data);
      }
    });
  }
};
