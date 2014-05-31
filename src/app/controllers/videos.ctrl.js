angular.module('app').controller('VideosCtrl', ['$scope',
    function($scope) {

        $scope.videos = [{
            path: 'http://vimeo.com/87091260',
            thumbnail: '/src/assets/img/photos/video/kings.jpg',
            caption: 'Lorem ipsum dolor sit amet.'
        }, {
            path: 'http://youtu.be/qf9M-WJPzgk',
            thumbnail: '/src/assets/img/photos/video/spaceship_teaser.jpg',
            caption: 'Lorem ipsum dolor sit amet.'
        }, {
            path: 'http://youtu.be/Ei7mnO9GRHc',
            thumbnail: '/src/assets/img/photos/video/starwars.jpg',
            caption: 'Lorem ipsum dolor sit amet.'
        }, {
            path: 'http://youtu.be/feFac2oLL6M',
            thumbnail: '/src/assets/img/photos/video/cov.jpg',
            caption: 'Lorem ipsum dolor sit amet.'
        }, {
            path: 'http://youtu.be/s-qEA4jW-Pk',
            thumbnail: '/src/assets/img/photos/video/speedreel.jpg',
            caption: 'Lorem ipsum dolor sit amet.'
        }];
    }
]);
