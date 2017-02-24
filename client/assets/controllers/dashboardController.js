app.controller('dashboardController', function (surveyFactory, $scope, $location, $cookies) {
  $scope.user = $cookies.get('username')
  $scope.user_id = $cookies.get('user_id')
  if (!$scope.user) {
    $location.url('/');
  }

  $scope.logout = function(){
    $cookies.remove('username')
    $cookies.remove('user_id')
    $location.url('/')
  };

  surveyFactory.getPolls(function (polls) {
    $scope.polls = polls;
    console.log($scope.polls)
  })

  $scope.delete = function(id, index){
  surveyFactory.deleteQuestion(id, function(data){
    $scope.polls.splice(index, 1);
  })
};
});
