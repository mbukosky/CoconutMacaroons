var app = angular.module('app', [
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'duScroll'
]);

/* Override default duration of smooth scroll */
app.value('duScrollDuration', 2000);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);

        $routeProvider.
        when('/', {
            templateUrl: 'app/partials/home.tpl.html',
            controller: 'ResumeCtrl'
        }).
        when('/news', {
            templateUrl: 'app/partials/news.tpl.html',
            controller: 'BlankCtrl',
            resolve: {
                title: function() {
                    return 'News';
                }
            }
        }).
        when('/photos', {
            templateUrl: 'app/partials/photos.tpl.html',
            controller: 'PhotosCtrl'
        }).
        when('/videos', {
            templateUrl: 'app/partials/videos.tpl.html',
            controller: 'VideosCtrl'
        }).
        when('/reviews', {
            templateUrl: 'app/partials/reviews.tpl.html',
            controller: 'BlankCtrl',
            resolve: {
                title: function() {
                    return 'Reviews';
                }
            }
        }).
        when('/writing-projects', {
            templateUrl: 'app/partials/writing-projects.tpl.html',
            controller: 'WritingProjectsCtrl'
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
