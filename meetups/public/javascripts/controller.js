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
    $scope.speakerslist = true;
}]);

meetupsControllers.controller('detailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get('data.json').then(function(response){
    var myArtists = [];
    var myArtwork = [];
    response.datails.speakers.forEach(function(item) {
      // looping 
      if (item.shortname == $routeParams.speakersid) {
        myArtists.push(item);
        myArtwork = myArtwork.concat(item.artwork);
      }
    });
    $scope.artists = myArtists;
    $scope.speakersDetail = true;
  },
    function(result) {
      console.log('http request faild iwth result :' + result);
    });
}]);
