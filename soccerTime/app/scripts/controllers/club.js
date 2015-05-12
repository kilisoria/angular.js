'use strict';

/**
 * @ngdoc function
 * @name soccerTimeApp.controller:ClubCtrl
 * @description
 * # ClubCtrl
 * Controller of the soccerTimeApp
 */
angular.module('soccerTimeApp')
  .controller('ClubCtrl', function ($scope) {
    $scope.teams = [
      {name:'TIGRE', country: 'arg', players:[{name: 'Luna'}, {name: 'Galmarini'}, {name: 'Garcia'}, {name: 'Arzura'}]},
      {name:'Boca', country: 'arg', players:[{name: 'Gago'}, {name: 'Orion'}, {name: 'Osvaldo'}, {name: 'Calleri'}]},
      {name:'Real Madrid', country: 'esp', players:[{name: 'CR7'}]},    
      {name:'River', country: 'arg', players:[{name: 'Mora'}, {name: 'Teo'}, {name: 'Piscu'}, {name: 'RF6'}]},
      {name:'Barcelona', country: 'esp', players:[{name: 'Messi'}, {name: 'Suarez'}, {name: 'Neymar'}, {name: 'Iniesta'}]}
      ];

    $scope.teamSelected = 'n/s';	
    $scope.selectTeam = function(name){
       $scope.teamSelected = name;         
    };

  });



            