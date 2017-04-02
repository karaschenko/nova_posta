novapostaApp.controller('novapostaController', function ($scope, $rootScope,  novapostaService, $routeParams) {
    $rootScope.markers = {lng: 30.5234, lat: 50.4501};

    novapostaService.getCities(function(data){
        $scope.items =  data;
        console.log($scope.items);
        $scope.Description= $routeParams.Description;

    });
    $scope.onMap = function (city){

        novapostaService.onMap(function (data) {
            $scope.lang = data.results[0].geometry.location.lng;
            $scope.lat = data.results[0].geometry.location.lat;
            $rootScope.markers = {lng:$scope.lang, lat: $scope.lat};


        }, city)

    }
});



