var app = angular.module('app', ['ngMap']);

app.controller('ctrl', function(NgMap) {
  
  NgMap.getMap().then(function(map) {
    console.log(map);
    
    console.log('위도 : ', map.getCenter().lat(), '경도 : ', map.getCenter().lng());

    console.log('마커 : ', map.markers);
    console.log('원  : ', map.shapes);
  });

});