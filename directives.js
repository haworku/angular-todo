// Filters and Directives
(function(angular){
  'use strict'

  angular.module('app', [
  ]);

  .filter('strikethrough', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

})(window.angular)
