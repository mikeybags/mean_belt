app.controller('loginController', function(beltFactory, $scope, $location, $cookies){
  $scope.login = function(){
    beltFactory.login($scope.user, function(data){
      if(data.err){
        $scope.error = data.err
      }else{
        console.log("DATA IN CONTROLLER IS", data)
        $cookies.put('user_id', data._id)
        $cookies.put('username', data.username)
        $location.url('/dashboard')
      }
    })
  }
})
