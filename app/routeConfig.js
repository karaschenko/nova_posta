novapostaApp
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/cities', {
                templateUrl: 'app/partials/cities.html',
                controller: 'novapostaController'
            })

            .otherwise({
                redirectTo: '/cities'
            });
    }]);