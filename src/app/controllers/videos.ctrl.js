angular.module('app').controller('VideosCtrl', ['$scope',
    function($scope) {

        $scope.videos = [{
            path: 'http://vimeo.com/87091260',
            thumbnail: '/src/assets/img/photos/news/media/new_reel.jpg'
        }, {
            path: 'http://www.youtube.com/embed/qf9M-WJPzgk',
            thumbnail: '/src/assets/img/photos/news/media/spaceship.jpg'
        }];
    }
]);
