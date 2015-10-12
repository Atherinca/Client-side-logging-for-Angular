'use strict';

/**
 * @ngdoc function
 * @name angularLogApp.controller:CauseerrorCtrl
 * @description
 * # CauseerrorCtrl
 * Controller of the angularLogApp
 */

angular.module('angularLogApp')
  .controller('CauseerrorCtrl', function ($scope) {
    // ---
    // PUBLIC METHODS.
    // ---
    // I cause an error to be thrown in nested functions.
    $scope.causeError = function() {
      foo();
    };
    // ---
    // PRIVATE METHODS.
    // ---
    function bar() {
      // NOTE: "y" is undefined.
      var x = y;
    }
    function foo() {
      bar();
    }
  });
