angular.module('app').controller('PhotosCtrl', ['$scope', '$http',
    function($scope, $http) {

        $scope.images = [];

        //TODO: Add a loader?

        $http.jsonp("https://api.flickr.com/services/rest", {
            params: {
                method: 'flickr.photosets.getPhotos',
                api_key: '8c6a5c097fe29a928b15bad86074d0aa',
                photoset_id: '72157644094557532',
                format: 'json',
                jsoncallback: 'JSON_CALLBACK'
            }
        }).success(function(data) {

        	/*
        	* Add the images as links with thumbnails to the template
        	*/
            var baseUrl;      
            angular.forEach(data.photoset.photo, function(photo, i) {

                baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' +
                    photo.server + '/' + photo.id + '_' + photo.secret;

                var imgThumb = baseUrl + '_t.jpg';
                var imgLarge = baseUrl + '_b.jpg';

                this.push({
                    title: photo.title,
                    full_size: imgLarge,
                    thumbnail: imgThumb
                });
            }, $scope.images);
        });

    }
]);
