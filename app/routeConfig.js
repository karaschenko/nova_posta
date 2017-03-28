config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/cities', {
            templateUrl: 'partials/cities.html',
            controller: 'novapostaController'}).

        otherwise({
            redirectTo: '/cities'
        });
    }]);