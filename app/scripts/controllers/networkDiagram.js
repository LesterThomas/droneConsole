angular.module('droneFrontendApp')
.controller('NetworkCtrl', ['$scope', 'VisDataSet',

  function($scope, VisDataSet) {

    $scope.onSelect = function(items) {
      // debugger;
      alert('select');
    };

    $scope.onClick = function(props) {
      //debugger;
      alert('Click');
    };

    $scope.onDoubleClick = function(props) {
      // debugger;
      alert('DoubleClick');
    };

    $scope.rightClick = function(props) {
      alert('Right click!');
      props.event.preventDefault();
    };

    $scope.options = {
		autoResize: true,
		height: '800',
		width: '100%',
		edges: {
			smooth: {
				type: 'cubicBezier',
				forceDirection:  'vertical',
				roundness: 0.4
			}
		},
		layout: {
			hierarchical: {
				direction: 'DU',
				levelSeparation:5
			}
		},
		physics:false
    };
	
    
    $scope.data = {"nodes":[
	{"id":"API Server","label":"API Server","size":40,"color":"#93D276","shape":"image","image":"images/server.jpg","shadow":true,"level":0},
	{"id":"DroneSim 1 PORT","label":"PORT: 14550","size":5,"color":"#1F1489","shape":"square","shadow":true,"level":20},
	{"id":"DroneSim 1","label":"DroneSim 1","size":20,"color":"#7F8489","shape":"image","image":"images/dronesim.png","shadow":true,"level":100},
	{"id":"DroneProxy 1 PORT B","label":"PORT: 14554","size":5,"color":"#1F1489","shape":"square","shadow":true,"level":20},
	{"id":"DroneProxy 1","label":"DroneProxy 1","size":20,"color":"#93D276","shape":"image","image":"images/proxy.jpg","shadow":true,"borderWidth":5,"level":1,"shadow.size":20,"level":33},
	{"id":"DroneProxy 1 PORT A","label":"PORT: 14553","size":5,"color":"#1F1489","shape":"square","shadow":true,"level":45},
	{"id":"RealDrone 1","label":"RealDrone 1","size":20,"color":"#7F8489","shape":"image","image":"images/drone.png","shadow":true,"level":100}, 
	{"id":"DroneSim 2 PORT","label":"PORT: 14551","size":5,"color":"#1F1489","shape":"square","shadow":true,"level":20},
	{"id":"DroneSim 2","label":"DroneSim 2","size":20,"color":"#7F8489","shape":"image","image":"images/dronesim.png","shadow":true,"level":100}
	],
	
	"edges":[
	{"from":"DroneProxy 1","to":"DroneProxy 1 PORT B","length":20},
	{"from":"DroneProxy 1","to":"DroneProxy 1 PORT A","length":20},
	{"from":"DroneProxy 1 PORT A","to":"RealDrone 1","length":200},
	{"from":"DroneProxy 1 PORT B","to":"API Server","length":200},
	{"from":"DroneSim 1","to":"DroneSim 1 PORT","length":10},
	{"from":"DroneSim 1 PORT","to":"API Server","length":100},
	{"from":"DroneSim 2","to":"DroneSim 2 PORT","length":10},
	{"from":"DroneSim 2 PORT","to":"API Server","length":100}
	]};
  }
  
]);