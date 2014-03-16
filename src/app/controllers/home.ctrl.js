angular.module('app').controller('HomeCtrl', ['$scope', 'title',
	function($scope, title){

	$scope.title = title;
}]);