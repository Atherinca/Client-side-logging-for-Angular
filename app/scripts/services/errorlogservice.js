'use strict';

/**
 * @ngdoc service
 * @name angularLogApp.errorlogservice
 * @description
 * # errorlogservice
 * Service in the angularLogApp.
 */

angular.module('angularLogApp')
  .provider('errorLogService', function () {

    var param = {
      url : "localhost",
      enabled : false
    };

    this.setConfig = function(url, enabled) {
      param.url = url;
      param.enabled = enabled;
    };
    // I log the given error to the remote server.
    this.$get = ['$window', '$log', 'stacktraceService', function($window, $log, stacktraceService) {


      // Pass off the error to the default error handler
      // on the AngualrJS logger. This will output the
      // error to the console (and let the application
      // keep running normally for the user).

      var $http = angular.injector(['ng']).get('$http');

      this.log = function log( exception, cause) {

        // Now, we need to try and log the error the server.

        $http.defaults.useXDomain = true;
        try {
          var errorMessage = exception.toString();
          var stackTrace = stacktraceService.print({e: exception});
          var sending = angular.toJson({
            errUrl: $window.location.href,
            errMessage: errorMessage,
            stackTrace: stackTrace
          });
          var req = {
            method : 'POST',
            url : param.url,
            headers : {
              'Content-Type' : 'application/json'
            },
            data : sending
          };
          $http(req);
        }catch (loggingError) {
          // For Developers - log the log-failure.
          $log.warn("Error logging failed");
          $log.log(loggingError);
        }
      };
      return this;
    }]
  });
