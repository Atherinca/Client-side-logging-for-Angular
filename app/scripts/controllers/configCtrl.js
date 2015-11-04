'use strict';

angular.module('angularLogApp')
  .controller('configCtrl', function($scope, errorLogService){
    $scope.setconfig = function(url, enabled){
      errorLogService.config(url, enabled);
    }
  });
