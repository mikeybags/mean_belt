var mongoose = require('mongoose');
var User = mongoose.model('User');

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
  showUser: function (request, response) {
    User.findOne({_id: request.params.id}, function (err, user) {
      if (err) {
        console.log("Error: ", err);
        response.json(err);
      } else {
        response.json(user);
      }
    });
  },

}
