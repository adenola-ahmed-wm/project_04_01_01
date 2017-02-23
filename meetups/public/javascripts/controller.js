var meetupsControllers = angular.module('meetupsControllers', []);

meetupsControllers.controller('homeController', ['$scope', '$http', function ($scope, $http)
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

meetupsControllers.controller('detailsController', ['$scope', '$http', function ($scope, $http)
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
