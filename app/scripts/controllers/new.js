'use strict';

/**
 * @ngdoc function
 * @name droneFrontendApp.controller:IndividualCtrl
 * @description
 * # IndividualCtrl
 * Controller of the droneFrontendApp
 */
   
angular.module('droneFrontendApp')
  .controller('NewCtrl', ['$scope', '$http','NgMap','$interval','$location','individualDrone','ModalService',function ($scope,$http,NgMap,$interval,$location,individualDrone,ModalService) {
	
    $scope.apiURL=individualDrone.apiURL;

  	console.log('Started controller'); 
  	$scope.connectionString="tcp:ip_address:port"

	$scope.connectExisting = function() {
		console.log('Connect Existing Button Clicked');
    $location.path('/')

	}
	$scope.createSimulated = function() {
		console.log('Create Simulated Button Clicked');

		$scope.showModal();


	}

 	$scope.showModal = function() {
        ModalService.showModal({
            templateUrl: 'views/modal.html',
            controller: "ModalCtrl"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    }



  $scope.$on('$destroy', function() {
    // clean up stuff
      console.log('###################################################'); 
      console.log('Unloading New Controller'); 
  })    
  



}]);

