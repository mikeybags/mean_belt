app.controller('createPollController', function (surveyFactory, $scope, $location, $cookies) {
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

  $scope.addQuestion = function() {
    $scope.newQuestion.user_id = $scope.user_id
    console.log($scope.newQuestion)
    surveyFactory.createPoll($scope.newQuestion, function(question) {
      $location.url('/dashboard')
    })
  }
});
