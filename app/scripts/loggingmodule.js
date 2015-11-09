'use strict';

/**
 * @ngdoc overview
 * @name angularLogApp
 * @description
 * # angularLogApp
 *
 * Main module of the application.
 */
angular
  .module('angularLogApp', [
    'ngRoute'
  ])

 .config(['errorLogServiceProvider', function(errorLogServiceProvider){
    errorLogServiceProvider.setConfig("http://localhost:8080/LogServer/receiveangularlog", true);
}]);
