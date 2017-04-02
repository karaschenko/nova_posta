novapostaApp.service('cityService', function($http){
    function getInfo(callback, Description, Ref){

        $http.post('https://api.novaposhta.ua/v2.0/json/',
            { "modelName": "AddressGeneral",
                "calledMethod": "getWarehouses",
                "methodProperties": {
                    "CityName": Description,
                    "CityRef": Ref
                },

                "apiKey": "976bd550daded120decc0c1b35d13546"}).success(function(data) {
            callback(data.data);
        });
    }

    return {
        getInfo: getInfo
    }

});
