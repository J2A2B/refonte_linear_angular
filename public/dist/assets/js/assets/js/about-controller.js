app.controller('about-controller', ['$scope','$http', 'dataAbout', function($scope,$http,dataAbout) {
dataAbout.getInfoBio().then((res) => {
    $scope.infoBio=res.data;
})
dataAbout.getInfoEvents().then((res) => {
    $scope.infoEvents=res.data;
    console.log($scope.infoEvents)
})
}]);﻿
