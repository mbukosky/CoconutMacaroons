var app = angular.module('app', [
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap'
]);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);

        $routeProvider.
        when('/', {
            templateUrl: '/src/app/partials/home.tpl.html',
            controller: 'ResumeCtrl'
        }).
        when('/news', {
            templateUrl: '/src/app/partials/news.tpl.html',
            controller: 'BlankCtrl',
            resolve: {
                title: function() {
                    return 'News';
                }
            }
        }).
        when('/photos', {
            templateUrl: '/src/app/partials/photos.tpl.html',
            controller: 'PhotosCtrl'
        }).
        when('/videos', {
            templateUrl: '/src/app/partials/videos.tpl.html',
            controller: 'VideosCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function() {
        ga('send', 'pageview', $location.path());
    });

    /* Set active tab in nav bar */
    var path = function() {
        return $location.path();
    };
    $rootScope.$watch(path, function(newVal, oldVal) {
        $rootScope.activetab = newVal;
    });
});
