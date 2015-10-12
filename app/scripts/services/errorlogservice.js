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

    function log( exception, cause) {

      // Pass off the error to the default error handler
      // on the AngualrJS logger. This will output the
      // error to the console (and let the application
      // keep running normally for the user).

      $log.error.apply( $log, arguments );



      // Now, we need to try and log the error the server.
      // --
      // NOTE: In production, I have some debouncing
      // logic here to prevent the same client from
      // logging the same error over and over again! All
      // that would do is add noise to the log.


      try {
        var errorMessage = exception.toString();
        var stackTrace = stacktraceService.print({ e: exception });
        var httpRequest = false;
        var sending = angular.toJson({
          errorUrl: $window.location.href,
          errorMessage: errorMessage,
          stackTrace: stackTrace,
          cause: ( cause || "")
        });

        // Log the JavaScript error to the server.
        // --
        // NOTE: In this demo, the POST URL doesn't
        // exists and will simply return a 404.


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
        httpRequest.open('POST', "/", true);
        httpRequest.setRequestHeader('Content-type', 'application/x-form-urlencoded');
        httpRequest.send(sending);

      } catch ( loggingError ) {
        // For Developers - log the log-failure.
        $log.warn( "Error logging failed" );
        $log.log( loggingError );
      }
    }
    // Return the logging function.
    return( log );
  });
