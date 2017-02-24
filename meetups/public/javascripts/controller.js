var meetupsControllers = angular.module('meetupsControllers', []);

meetupsControllers.controller('HomeController', ['$scope', '$http', function ($scope, $http)
{
  // $scope.artists =
    $http.get('data.json')
    .then(function(response){
      $scope.artists = response.data.speakers;
    },
    function(result){
      console.log('HTTP request failed with result: ' + result);
    });
}]);
