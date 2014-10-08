'use strict';

/**
 * @ngdoc function
 * @name uListerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uListerApp
 */
angular.module('uListerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.item = {name: ''};
    $scope.itemList = [];
    $scope.store = function() {
      if ($scope.itemList.indexOf($scope.item.name) < 0) {
        $scope.itemList.push($scope.item.name);
      }
    };
  });
