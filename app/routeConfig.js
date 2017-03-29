novapostaApp
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/cities', {
                templateUrl: 'app/partials/cities.html',
                controller: 'novapostaController'
            })
            .when('/cities/:Description/:Ref', {

                templateUrl: 'app/partials/city.html',
                controller: 'cityController'
            })

            .otherwise({
                redirectTo: '/cities'
            });
    }]);