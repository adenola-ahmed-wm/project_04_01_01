var meetupsControllers = angular.module('meetupsControllers', []);

meetupsControllers.controller('HomeController', ['$scope', '$http', function ($scope, $http)
{
  // $scope.artists =
    $http.get('data.json')
    .then(function(response){
      $scope.artists = response.data.speakers;
      $scope.page = 'home';
    },
    function(result){
      console.log('HTTP request failed with result: ' + result);
    });
}]);

meetupsControllers.controller('SpeakerController', ['$scope', '$http', function ($scope, $http)
{
    $http.get('data.json')
    .then(function(response){
      $scope.artists = response.data.speakers;
      $scope.speakerList = true;
    },
    function(result){
      console.log('HTTP request failed with result: ' + result);
    });
}]);

meetupsControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get('data.json').then(function(response){
    var myArtists = [];
    response.data.speakers.forEach(function(item) {
      // if statement returns only one in the 'SpeakerController'.
      if (item.shortname == $routeParams.speakersid) {
        myArtists.push(item);
      }
    });
    $scope.artists = myArtists;
    $scope.speakersDetail = true;
  },
    function(result) {
      console.log('http request failed with result :' + result);
    });
}]);
