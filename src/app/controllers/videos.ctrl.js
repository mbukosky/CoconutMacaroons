angular.module('app').controller('VideosCtrl', ['$scope',
    function($scope) {

        $scope.videos = [{
            path: 'https://vimeo.com/178385241/',
            thumbnail: '/src/assets/img/photos/news/media/Wake_1.jpg',
            caption: 'By the Wake (2016)'
        }, {
            path: 'http://vimeo.com/laurenmeley/comedicscene',
            thumbnail: 'http://i.vimeocdn.com/video/479945860_320.jpg',
            caption: 'Comedic Scene (2014)'
        }, {
            path: 'http://vimeo.com/87091260',
            thumbnail: '/src/assets/img/photos/video/kings.jpg',
            caption: 'Dramatic Reel (2014)'
        }, {
            path: 'http://youtu.be/qf9M-WJPzgk',
            thumbnail: '/src/assets/img/photos/video/spaceship_teaser.jpg',
            caption: 'THE SPACESHIP Teaser (2014)'
        }, {
            path: 'http://youtu.be/Ei7mnO9GRHc',
            thumbnail: '/src/assets/img/photos/video/starwars.jpg',
            caption: 'Star Wars VII Audition Video  -  yep, I did it!'
        }, {
            path: 'http://youtu.be/feFac2oLL6M',
            thumbnail: '/src/assets/img/photos/video/cov.jpg',
            caption: 'CAROLINE OF VIRGINIA  -  Full Movie'
        }, {
            path: 'http://youtu.be/s-qEA4jW-Pk',
            thumbnail: '/src/assets/img/photos/video/speedreel.jpg',
            caption: 'Speed Reel. Compilation of projects from 2007 - 2010.'
        }];
    }
]);
