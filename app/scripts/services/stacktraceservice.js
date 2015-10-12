'use strict';

/**
 * @ngdoc service
 * @name angularLogApp.stacktraceservice
 * @description
 * # stacktraceservice
 * Service in the angularLogApp.
 */

angular.module('angularLogApp')
  .factory('stacktraceService', function () {
    // "printStackTrace" is a global object.
    return({
      print: printStackTrace
    });
  });
