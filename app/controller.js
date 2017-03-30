novapostaApp.controller('novapostaController', function novapostaController($scope,  novapostaService, $routeParams) {
    novapostaService.getCities(function(data){
        $scope.items =  data;
        console.log($scope.items);
        $scope.Description= $routeParams.Description;

    });
    $scope.onMap = function (city){

        novapostaService.onMap(function (data) {

        }, city)
    }



});






novapostaApp.controller('cityController', function cityController($scope, cityService, $routeParams) {

    cityService.getInfo(function(data){
        $scope.city =  data;


    }, $routeParams.Description, $routeParams.Ref);

})
