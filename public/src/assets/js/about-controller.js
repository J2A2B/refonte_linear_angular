app.controller('about-controller', ['$scope','$http','$sce', '$timeout','dataAbout', function($scope,$http,$sce,$timeout,dataAbout) {
  const BASE_URL_SOUNDCLOUD = "https://w.soundcloud.com/player/?url=//soundcloud.com/";
  const END_URL_SOUNDCLOUD = "&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true";
  $scope.showWindow=true;
  dataAbout.getInfoBio().then((res) => {
    $scope.infoBio=res.data;
  })
  dataAbout.getInfoEvents().then((res) => {
    $scope.infoEvents=res.data;
  })
  $scope.getIdEvent =(event, input) =>{
$timeout(function () {
  $scope.showWindow=false ;
}, 500);
console.log(event.podcasts[0].url.length)
if (input === "one") {
  $scope.fullUrlSoundcloud = $sce.trustAsResourceUrl(BASE_URL_SOUNDCLOUD+event.podcasts[0].url+END_URL_SOUNDCLOUD);
  $scope.podcastName = event.podcasts[0].name;
}else {
  $scope.fullUrlSoundcloud = $sce.trustAsResourceUrl(BASE_URL_SOUNDCLOUD+event.podcasts[1].url+END_URL_SOUNDCLOUD);
  $scope.podcastName = event.podcasts[1].name;
}

// $sce.trustAsResourceUrl(BASE_URL_SOUNDCLOUD+event.podcasts[0].url+END_URL_SOUNDCLOUD);
// $scope.nameSoundcloud =
  }
  $scope.dragSlideshow = () =>{
    $( ".cont-window-about" ).draggable();
  }
}]);﻿
