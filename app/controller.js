novapostaApp.controller('novapostaController', function novapostaController($scope,  novapostaService) {
    novapostaService.getCities(function(data){
        $scope.items =  data;
        console.log($scope.items);
    });

});
