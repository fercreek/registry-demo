angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

	var url = "http://localhost:8000/records/";
	$scope.submit = submit;
	$scope.record = {};

	function submit() {
		console.log('submit', $scope.record);
		$http.post(url, $scope.record, {'Content-Type': 'application/json'})
			.then(function(res){
				console.log('res', res);
				$scope.record = {};
			})
			.catch(function(err){
				console.log('err', err)
			});
	}

}])
   
.controller('calendarCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
	var url = "http://localhost:8000/records/";

	activate();

	function activate(){
		$scope.calendar = {};
		$http.get(url)
			.then(function(res){
				// $scope.calendar.eventSource = createRandomEvents();
				$scope.calendar.eventSource = res.data;

				res.data.forEach(function(data) {
					data.title = data.nombre + ' - ' + data.placas;
					data.allDay = false;
					data.startTime = data.fecha;
					data.endTime = data.fecha;
				});
			});

	}

	$scope.onEventSelected = function (event) {
	    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
	};

    function createRandomEvents() {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    }

}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 