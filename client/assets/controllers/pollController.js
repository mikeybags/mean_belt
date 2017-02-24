app.controller('pollController', function (surveyFactory, $scope, $location, $cookies, $routeParams) {
  $scope.user = $cookies.get('username')
  $scope.user_id = $cookies.get('user_id')
  $scope.poll_id = $routeParams.id;

  if (!$scope.user) {
    $location.url('/');
  }

  $scope.logout = function(){
    $cookies.remove('username')
    $cookies.remove('user_id')
    $location.url('/')
  };

  surveyFactory.showPoll($scope.poll_id, function(poll) {
    console.log(poll);
    $scope.question = poll;
  })

  $scope.addVote = function (option_id, index) {
  surveyFactory.addVote(option_id, function (option) {
    console.log(option)
    $scope.question._options[index].votes += 1;
  })
}
});
