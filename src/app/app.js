angular.module('app', [
	'ngRoute',
	'ngSanitize'
]);

angular.module('app').config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider) {
		//$locationProvider.html5Mode(true);

		$routeProvider.
			when('/', {
				templateUrl: '/src/app/partials/home.tpl.html',
				controller: 'HomeCtrl',
				resolve :{
					title: function() { 
						return 'Home'; 
					}
				}
			}).
			when('/news', {
				templateUrl: '/src/app/partials/home.tpl.html',
				controller: 'HomeCtrl',
				resolve: {
					title: function() { 
						return 'News'; 
					}
				}
			}).
			when('/resume', {
				templateUrl: '/src/app/partials/home.tpl.html',
				controller: 'HomeCtrl',
				resolve: {
					title: function() { 
						return 'Resume'; 
					}
				}
			}).
			when('/photos', {
				templateUrl: '/src/app/partials/home.tpl.html',
				controller: 'HomeCtrl',
				resolve: {
					title: function() { 
						return 'Photos'; 
					}
				}
			}).
			when('/videos', {
				templateUrl: '/src/app/partials/home.tpl.html',
				controller: 'HomeCtrl',
				resolve: {
					title: function() { 
						return 'Videos'; 
					}
				}
			}).
			otherwise({
				redirectTo: '/'
			});	
}]);