'use strict';

/**
 * @ngdoc function
 * @name uListerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the uListerApp
 */
angular.module('uListerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
