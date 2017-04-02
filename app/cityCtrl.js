novapostaApp.controller('cityController', function ($scope, cityService, $routeParams) {

    cityService.getInfo(function(data){
        $scope.city =  data;


    }, $routeParams.Description, $routeParams.Ref);

})/**
 * Created by mihail on 01.04.17.
 */
