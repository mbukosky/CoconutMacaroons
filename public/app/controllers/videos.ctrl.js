angular.module('app').controller('VideosCtrl', ['$scope',
  function($scope) {

    $scope.videos = [{
      path: 'https://vimeo.com/255286419',
      thumbnail: '/assets/img/photos/video/Reel_happy.jpeg',
      caption: 'Acting Reel (2018) - Watch Now on Vimeo!'
    }, {
      path: 'https://vimeo.com/245216518',
      thumbnail: '/assets/img/photos/video/Unexpecting.jpg',
      caption: 'UnExpecting (2017) - Watch Now on Vimeo!'
    }, {
      path: 'https://vimeo.com/178385241/',
      thumbnail: '/assets/img/photos/news/media/Wake_1.jpg',
      caption: 'By the Wake (2016) - Watch Now on Vimeo!'
    }, {
      path: 'https://youtu.be/LcBKkqKtRjg',
      thumbnail: '/assets/img/photos/video/unexpecting_black.jpeg',
      caption: 'UnExpecting Trailer (2017) - Watch Now on YouTube!'
    }, {
      path: 'https://vimeo.com/87091260',
      thumbnail: '/assets/img/photos/video/Old_reel.jpeg',
      caption: 'Dramatic Reel (2014)'
    }, {
      path: 'https://youtu.be/qf9M-WJPzgk',
      thumbnail: '/assets/img/photos/video/spaceship_teaser.jpg',
      caption: 'THE SPACESHIP Teaser (2014)'
    }, {
      path: 'https://youtu.be/Ei7mnO9GRHc',
      thumbnail: '/assets/img/photos/video/starwars.jpg',
      caption: 'Star Wars VII Audition Video - yep, I did it!'
    }, {
      path: 'https://youtu.be/feFac2oLL6M',
      thumbnail: '/assets/img/photos/video/cov.jpg',
      caption: 'CAROLINE OF VIRGINIA - Full Movie'
    }, {
      path: 'https://youtu.be/s-qEA4jW-Pk',
      thumbnail: '/assets/img/photos/video/speedreel.jpg',
      caption: 'Speed Reel. Compilation of projects from 2007 - 2010.'
    }];
  }
]);
