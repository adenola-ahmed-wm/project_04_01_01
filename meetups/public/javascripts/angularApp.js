var myApp = angular.module('myApp', [
    //Dependencies of what the application needs to run
    'ngRoute',
	'meetingController'
]);

myApp.config([
    '$routeProvider',
    function($routeProvider){
        $routeProvider.when('/home', {
            templateUrl: 'partials/home.ejs'
            
        })
      .when('/speakers', {
            templateUrl: 'partials/speakerslist.ejs'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);
