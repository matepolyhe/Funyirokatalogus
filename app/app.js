var App = angular.module('App', []);

App.controller('FunyiroAdatbazisCtrl', function($scope, $http) {
    $http.get('FunyiroAdatbazis.json')
        .then(function(res){
            $scope.funyirok = res.data;
        });
});
function refreshVagoszelesseg() {
    var x = document.getElementById("vagoszelesseg_range").value;
    document.getElementById("vagoszelessegCurrentValue").innerHTML = (x * 6/5).toString();

}
function refreshHengerurtartalom() {
    var x = document.getElementById("hengerurtartalom_range").value;
    document.getElementById("hengerurtartalomCurrentValue").innerHTML = (x * 6/5).toString();

}
function refreshTomeg() {
    var x = document.getElementById("tomeg_range").value;
    document.getElementById("tomegCurrentValue").innerHTML = (x * 6/5).toString();

}
function disableHajtasValaszto() {
    document.getElementById("benzinHajtas").disabled = true;
    document.getElementById("elektromosHajtas").disabled = true;
}
function enableHajtasValaszto() {
    document.getElementById("benzinHajtas").disabled = false;
    document.getElementById("elektromosHajtas").disabled = false;
}