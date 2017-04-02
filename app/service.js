novapostaApp.service('novapostaService', function($http){
    function getCities(callback){
        $http.post('https://api.novaposhta.ua/v2.0/json/',
            {   "modelName": "Address",
                "calledMethod": "getCities",
                "methodProperties": {
                    "": ""
                },

                "apiKey": "976bd550daded120decc0c1b35d13546"}).success(function(data) {
                callback(data.data);
            });
    }
    function  onMap(callback, city) {

        $http.get('http://maps.googleapis.com/maps/api/geocode/json?address=Украина,+' + city ).success(function(data){
            callback(data);
        });
    }
    return {
        getCities: getCities,
        onMap: onMap
    }

});

