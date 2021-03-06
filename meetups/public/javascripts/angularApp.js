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
        .otherwise({
            redirectTo: '/home'
        });
    }
]);
