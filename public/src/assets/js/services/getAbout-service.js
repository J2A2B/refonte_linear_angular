app.service("dataAbout", [ '$http', function($http) {

this.getInfoBio = () => {
  return $http.get('/api/bio').then((response) => {
          return response;      
    }, function(err) {
            return error;
  });
}
this.getInfoEvents = () => {
  return $http.get('/api/events').then((response) => {
          return response;      
    }, function(err) {
            return error;
  });
}
}]);