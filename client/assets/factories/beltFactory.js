app.factory('beltFactory', function ($http) {
  var factory = {}

  factory.login = function (user, callback) {
    $http.post('/user', user).then(function (data){
      console.log("DATA IN FACTORY IS:", data)
      callback(data.data);
    })
  }

  return factory;
});
