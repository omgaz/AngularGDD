var characterServices = angular.module('gddApp.characters.service', [
	'ngResource'
]);

characterServices.factory('Character', ['$resource',
	function ($resource) {
		return $resource('/api/characters/:id', {id: '@id'});
	}
]);

characterServices.factory('MultipleCharacterLoader', ['Character', '$q',
	function(Character, $q) {
		return function() {
			var delay = $q.defer();
			Character.query(function(characters) {
				delay.resolve(characters);
			}, function() {
				delay.reject('Unable to fetch characters');
			});
			return delay.promise;
		};
	}
]);

characterServices.factory('CharacterLoader', ['Character', '$route', '$q',
	function(Character, $route, $q) {
		return function() {
			var delay = $q.defer();
			Character.get({id: $route.current.params.characterId}, function(character) {
				delay.resolve(character);
			}, function() {
				delay.reject('Unable to fetch character '  + $route.current.params.characterId);
			});
			return delay.promise;
		};
	}
]);;
var charactersModule = angular.module('gddApp.characters', [
  'ngRoute',
  'gddApp.characters.service'
]);

charactersModule.config(['$routeProvider', function($routeProvider){

  $routeProvider.when('/characters', {
    templateUrl:'../templates/characters/list.tpl.html',
    controller:'CharactersListCtrl',
    resolve:{
      characters:['MultipleCharacterLoader', function(MultipleCharacterLoader){
        return MultipleCharacterLoader();
      }]
    }
  });
}]);

charactersModule.controller('CharactersListCtrl', ['$scope', 'characters', function($scope, characters){
  $scope.characters = characters;
  console.log('characters', characters);
  $scope.viewCharacter = function (character) {
    $location.path('/characters/'+character.$id());
  };
}]);;
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

    $scope.home = function () {
      $location.path('/characters');
    };
  }
]);