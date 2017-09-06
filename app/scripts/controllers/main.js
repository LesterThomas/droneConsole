'use strict';

/**
 * @ngdoc function
 * @name droneFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the droneFrontendApp
 */

angular.module('droneFrontendApp')
  .controller('MainCtrl', ['$scope','$rootScope', '$location','$interval','facebookUser',function ($scope,$rootScope,$location,$interval,facebookUser) {

  	console.log('Started Main controller');
    $rootScope.$on('fbLoginSuccess', function(name, response) {
      facebookUser.then(function(user) {
        user.api('/me',{fields:['name','email']}).then(function(response) {
          $rootScope.loggedInUser = response;
        });
      });
    });

    $rootScope.$on('fbLogoutSuccess', function() {
      $scope.$apply(function() {
        $rootScope.loggedInUser = {};
      });
    });

	}]);

