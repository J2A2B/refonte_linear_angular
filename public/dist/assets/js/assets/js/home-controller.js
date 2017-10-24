app.controller('home-controller', ['$scope','$http', '$routeParams', 'dataEp', function($scope,$http,$routeParams,dataEp) {
  $scope.resizeHome = true;
  const id = $routeParams.id_ep;

  dataEp.getInfoEp().then((res) => {
    $scope.infoEp=res.data;
  })
  $scope.showInfosEp = (ep) =>{
    $scope.showImg = false;
    $scope.eps = ep.photos;
  console.log($scope.eps)
}
// $scope.leftSlide = () =>{
//  $(".slideshow ul").animate({marginLeft:-400},800,function(){
//   $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
// })
// }
// $scope.rightSlide = () =>{
//  $(".slideshow ul").animate({marginRight:-400},800,function(){
//   $(this).css({marginRight:0}).find("li:last").after($(this).find("li:first"));
// })
// }
$scope.leftSlide = () =>{
  
  const arrayImg = $scope.eps;
  // console.log(arrayImg)
  const lastElement = arrayImg.slice(arrayImg.length-1);
  // console.log(lastElement)
  const arrayRemoved = arrayImg.splice(0,arrayImg.length -1)
  $scope.eps = lastElement.concat(arrayRemoved); 
  console.log($scope.eps)
}
$scope.rightSlide = () =>{
  const arrayImg = $scope.eps;
  const firstElement = arrayImg.slice(0,1);
  const arrayRemoved = arrayImg.splice(1,arrayImg.length -1)
   $scope.eps = arrayRemoved.concat(firstElement); 
}
$( ".slideshow " ).draggable();
}]);﻿
