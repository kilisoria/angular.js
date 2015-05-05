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
      {name:'TIGRE', country: 'ARG', players:[{name: 'Luna', name: 'Galmarini', name: 'Garcia', name: 'Arzura'}]},
      {name:'Boca', country: 'ARG', players:[{name: 'Gago', name: 'Orion', name: 'Osvaldo', name: 'Calleri'}]},
      {name:'Real Madrid', country: 'ESP', players:[{name: 'CR7'}]},    
      {name:'River', country: 'ARG', players:[{name: 'Mora', name: 'Teo', name: 'Piscu', name: 'RF6'}]},
      {name:'Barcelona', country: 'ESP', players:[{name: 'Messi', name: 'Suarez', name: 'Neymar', name: 'Iniesta'}]}   
    ];
    $scope.teamSelected = 'n/s';	
    $scope.selectTeam = function(name){
       $scope.teamSelected = name;         
    }

  });
