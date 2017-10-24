app.service("dataEp", [ '$http', function($http) {

  this.getInfoEp = () => {
    return $http.get('/api/ep').then((response) => {
      return response;      
    }, function(err) {
      return error;
    });
  };
  this.getInfoOneEp = (id) => {
    return $http.get('/api/ep' + id).then((response) => {
      return console.log(response);      
    }, (err) => {
      return err;
    });
  };
}]);