app.controller('dashboardController', function (beltFactory, $scope, $location, $cookies) {
  $scope.user = $cookies.get('username')
  $scope.user_id = $cookies.get('user_id')

  $scope.logout = function(){
    $cookies.remove('username')
    $cookies.remove('user_id')
    $location.url('/')
  };
});
