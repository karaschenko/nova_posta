novapostaApp.directive('map', function($rootScope, $http) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        link: function(scope, element, attrs) {
            console.log(element);
            var myOptions = {
                zoom: 5,
                center: new google.maps.LatLng(48.87916, 35.32910),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById(attrs.id), myOptions);
            scope.$watch(function() {
                return $rootScope.markers;
            }, function() {
                console.log($rootScope.markers)
                var marker = new google.maps.Marker({
                    position: $rootScope.markers,
                    map: map,
                    title: 'Hello World!'
                });
                marker.setMap(map);
            }, true);
            google.maps.event.addListener(map, 'click', function(e) {
                scope.$apply(function() {
                    addMarker({
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng()
                    });

                    $http.get('https://maps.googleapis.com/maps/api/geocode/json?language=ru&address='+e.latLng.lat()+','+e.latLng.lng())
                        .success(function (data) {
                            console.log(data.results[0].address_components[1])

                    });


                });

            });

            addMarker= function(pos){
                var myLatlng = new google.maps.LatLng(pos.lat,pos.lng);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title:"Hello World!"
                });
            }
        }
    };
});
