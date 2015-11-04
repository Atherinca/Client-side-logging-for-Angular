'use strict';

/**
 * @ngdoc service
 * @name angularLogApp.errorlogservice
 * @description
 * # errorlogservice
 * Service in the angularLogApp.
 */

angular.module('angularLogApp')
  .factory('errorLogService', function ($log, $window, stacktraceService) {
    // I log the given error to the remote server.

    var param = {
      url : "localhost",
      enabled : false
    };

    function config(url, enabled){
      param.url = url;
      param.enabled = enabled;
    }

    function log( exception, cause) {

      // Pass off the error to the default error handler
      // on the AngualrJS logger. This will output the
      // error to the console (and let the application
      // keep running normally for the user).

      $log.error.apply( $log, arguments );


      // Now, we need to try and log the error the server.

      try {
        var errorMessage = exception.toString();
        var stackTrace = stacktraceService.print({ e: exception });
        var httpRequest = false;
        var sending = angular.toJson({
          errUrl: $window.location.href,
          errMessage: errorMessage,
          stackTrace: stackTrace
        });
        // Log the JavaScript error to the server.


        if (window.XMLHttpRequest){
          httpRequest = new XMLHttpRequest();
        }
        else if (window.ActiveXObject){
          httpRequest = new ActiveXObject("Microsot.XMLHTTP");
        }
        if(!httpRequest){
          console.log("Erreur impossible de créer une requête!");
          return false;
        }
        if (param.enabled == true){
          httpRequest.open('POST', param.url, true);
          httpRequest.setRequestHeader('Content-type', 'application/json');
          httpRequest.send(sending);
        }


      } catch ( loggingError ) {
        // For Developers - log the log-failure.
        $log.warn( "Error logging failed" );
        $log.log( loggingError );
      }
    }
    // Return the logging function.
    return{
      log : log,
      config : config
    };
  });
