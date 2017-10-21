var App = angular.module('App', []);

App.controller('FunyiroAdatbazisCtrl', function($scope, $http) {
    $http.get('FunyiroAdatbazis.json')
        .then(function(res){
            $scope.funyirok = res.data;
        });
});