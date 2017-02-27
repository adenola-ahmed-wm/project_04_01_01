var meetupsControllers = angular.module('meetupsControllers', []);

meetupsControllers.controller('HomeController', ['$scope', '$http', function($scope, $http){
    $http.get('data.json')
    .then(function(response){
        $scope.artists = response.data.speakers;
        $scope.page = "home";
    },
    function(err){
        console.log('HTTP request failed with result: ' + err);
    });
}]);

meetupsControllers.controller('SpeakerController', ['$scope', '$http', function($scope, $http){
    $http.get('data.json')
    .then(function(response){
        $scope.artists = response.data.speakers;
        $scope.speakerList = true;
    },
    function(err){
        console.log('HTTP request failed with result: ' + err);
    });
}]);

meetupsControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', '$sce', function($scope, $http, $routeParams, $sce){
    $http.get('data.json')
    .then(function(response){
        var speakers = response.data.speakers;
        var artists = [];

        speakers.forEach(function(item){
            if(item.shortname === $routeParams.name){
                artists.push(item);
                $scope.description = item.description;
            }
        });

        $scope.artists = artists;
        $scope.speakerDetail = true;
    },
    function(err){
        console.log('HTTP request failed with result: ' + err);
    });
}]);