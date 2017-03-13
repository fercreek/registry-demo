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
				console.log('res', res)
			})
			.catch(function(err){
				console.log('err', err)
			});
	}

}])
   
.controller('calendarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 