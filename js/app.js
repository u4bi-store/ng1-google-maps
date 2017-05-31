var app = angular.module('app', ['ngMap']);

app.controller('ctrl', function($scope, NgMap) {

    $scope.API_KEY = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBQ5Y0xV98nz7z-8X3xjLlTqPdfekGuNp0';

    NgMap.getMap().then(function(map) {
        console.log(map);

        console.log('위도 : ', map.getCenter().lat(), '경도 : ', map.getCenter().lng());

        console.log('마커 : ', map.markers);
        console.log('원  : ', map.shapes);
    });

});