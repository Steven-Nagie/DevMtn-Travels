angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
  $scope.travelInfo = mainSrv.travelInfo;
  $scope.currentCity = "";
  var cities = $scope.travelInfo;
  var current = parseInt($stateParams.id);

  var getCity = function() {

    for (var i = 0; i < cities.length; i++) {
      if (cities[i].id === current) {
        $scope.currentCity = cities[i].city;
      }
    }
  };

  getCity();
});
