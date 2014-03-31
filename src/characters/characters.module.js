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
}]);