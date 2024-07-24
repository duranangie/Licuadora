var estadoLicuadora = "apagado";
var licuadora=document.getElementById("blender")
var sonidoLicuadora = document.getElementById("blender-sound")
var sonidoLicuadoraBoton = document.getElementById("blender-button-sound")

function controlarLicuadora(){
    if(estadoLicuadora==="apagado"){
        estadoLicuadora="encendido";
        hacerBrrBrr();
        licuadora.classList.add("active")
        console.log("me predististe");
    }else{
        estadoLicuadora="apagado"
        hacerBrrBrr();
        licuadora.classList.remove("active")
        console.log("me apagaste");
    }
  
}

function hacerBrrBrr(){
    if(sonidoLicuadora.paused){
        sonidoLicuadoraBoton.play();
        sonidoLicuadora.play();
    }else{
        sonidoLicuadoraBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime=0;
    }
}