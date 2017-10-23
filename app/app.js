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
function createList() {
    document.getElementById('listaContainer').innerHTML = '';
    var e = document.getElementById("talalatszamok");
    var listazandoElemszam = parseInt(e.options[e.selectedIndex].value);
    var listaContainerHeight = listazandoElemszam * 20;
    document.getElementById('listaContainer').style.height = listaContainerHeight + 'px';
    document.getElementById('listaContainer').innerHTML += '<ol id="lista"></ol>';
    listaFeltoltes();
}
function listaFeltoltes() {
    var e = document.getElementById("talalatszamok");
    var listazandoElemszam = parseInt(e.options[e.selectedIndex].value);
    for(var i = 0; i<listazandoElemszam; i++){
        document.getElementById('lista').innerHTML += '<li>i</li>';
    }
}
function homeScreen() {
    window.location.replace('fooldal.html');
}
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}