// 
// © 2014 Thomas Street LLC. All rights reserved
//

'use strict';

angular.module('integrationApp')
  .directive('faTap', function () {
    return {
      restrict: 'A',
      compile: function() {
        return { 
          post: function(scope, element, attrs) {
            scope.isolate = scope.isolate || {};
            scope.isolate[scope.$id] = scope.isolate[scope.$id] || {};
            var isolate = scope.isolate[scope.$id];


            if (attrs.faTap) {
              var _dragging = false;

              isolate.surface.on("touchmove", function(data) {
                _dragging = true;
                return data;
              });

              isolate.surface.on("touchend", function(data) {
                if (!_dragging) scope.$eval(attrs.faTap);
                _dragging = false
              });
            }
          }
        }
      }
    };
  });