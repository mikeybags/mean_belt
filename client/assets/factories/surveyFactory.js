app.factory('surveyFactory', function ($http) {
  var factory = {}

  factory.login = function (user, callback) {
    $http.post('/user', user).then(function (data){
      console.log("Should return 1 user object in data");
      console.log("DATA IN FACTORY ON LOGIN IS:", data)
      callback(data.data);
    });
  };

  factory.getPolls = function (callback) {
    $http.get('/dashboard').then(function (data) {
      console.log("Should return an array of polls in data");
      console.log("DATA IN FACTORY ON GET POLLS IS:", data)
      callback(data.data);
    });
  };

  factory.createPoll = function (poll, callback) {
    $http.post('/question', poll).then(function (data) {
      console.log("Should return 1 poll object in data");
      console.log("DATA IN FACTORY ON CREATE POLL IS:", data)
      callback(data.data);
    });
  };

  factory.showPoll = function (poll_id, callback) {
    $http.get('/question/'+ poll_id).then(function (data) {
      console.log("Should return 1 poll object in data");
      console.log("DATA IN FACTORY ON SHOW POLL IS:", data)
      callback(data.data);
    });
  };

  factory.addVote = function (option_id, callback) {
    $http.put('/vote', {option_id: option_id}).then(function (data) {
      console.log("Should return 1 poll object in data");
      console.log("DATA IN FACTORY ON ADD VOTE IS:", data)
      callback(data.data);
    });
  };

  factory.deleteQuestion = function (question_id, callback) {
    $http.delete('/question/'+ question_id).then(function (data) {
      console.log("Should return delete info");
      console.log("DATA IN FACTORY ON DELETE IS:", data)
      callback(data.data);
    });
  };

  return factory;
});
