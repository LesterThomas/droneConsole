angular.module('droneFrontendApp')
.service('individualDrone', function() {
    this.droneId=-1;
    this.apiURL='HTTP://192.168.1.67:1235/';//'http://localhost:1235/'; //http://sail.vodafone.com/drone/';

});