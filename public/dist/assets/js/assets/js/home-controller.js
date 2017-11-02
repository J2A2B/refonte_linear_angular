app.controller('home-controller', ['$scope','$http', '$routeParams', 'dataEp', function($scope,$http,$routeParams,dataEp) {
  $scope.resizeHome = true;
  const id = $routeParams.id_ep;

  dataEp.getInfoEp().then((res) => {
    $scope.infoEp=res.data;
  })
  $scope.showInfosEp = (ep) =>{
    $scope.showImg = false;
    $scope.eps = ep.photos;
  }
  $scope.leftSlide = () =>{
    const arrayImg = $scope.eps;
    const lastElement = arrayImg.slice(arrayImg.length-1);
    const arrayRemoved = arrayImg.slice(0,arrayImg.length-1);
    $scope.eps = lastElement.concat(arrayRemoved); 
  }
  $scope.rightSlide = () =>{
    const arrayImg = $scope.eps;
    const firstElement = arrayImg.slice(0,1);
    const arrayRemoved = arrayImg.slice(1,arrayImg.length+1)
    $scope.eps = arrayRemoved.concat(firstElement); 
  }
  $scope.dragSlideshow = () =>{
    $( ".slideshow" ).draggable();
  }

    //   setTimeout(function(){
    //     $( ".slideshow" ).draggable();
    //     // console.log('After:', $('.sortable').length);
    // },1000)
  }]);﻿
