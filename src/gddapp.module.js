var gddApp = angular.module('gddApp', [
	'ngRoute',
  'ngResource',
	'gddApp.characters'
]);

gddApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  //$locationProvider.html5Mode(true); // Only needed for JS Fiddele
  $routeProvider.otherwise({redirectTo:'/characters'});
}]);

gddApp.controller('GDDAppCtrl', ['$scope', function($scope) {

}]);

gddApp.controller('HeaderCtrl', ['$scope', '$location', '$route',
  function ($scope, $location, $route) {
    $scope.location = $location;
    $scope.appInfo = {
      name: "GDD"
    };

    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    }; 

    $scope.home = function () {
      $location.path('/characters');
    };
  }
]);