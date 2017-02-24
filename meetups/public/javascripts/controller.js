var meetingController = angular.module('meetingController', []);

meetingController.controller('HomeController', ['$scope', '$http', function($scope, $http) {
	$http.get('/data.json')
	.then(function(response){
			$scope.speakers = response.data.speakers;
			$scope.info =  null;
		},
		function(error){
			console.error(error);
		}
	)
}]);
