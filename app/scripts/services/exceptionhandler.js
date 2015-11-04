'use strict';

/**
 * @ngdoc service
 * @name angularLogApp.exceptionhandler
 * @description
 * # exceptionhandler
 * Service in the angularLogApp.
 */
angular.module('angularLogApp')
  .provider("$exceptionHandler",
  {
    $get: function( errorLogService) {
      return( errorLogService.log);
    }
  });
