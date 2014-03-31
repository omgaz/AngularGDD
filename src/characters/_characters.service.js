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
]);