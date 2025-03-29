textin = document.getElementById("textin")


if(window.matchMedia("(max-width: 320px)").matches){
    textin.textContent = "Eu gosto de 💻"   
}
else{
    textin.textContent = "Eu gosto de Computador"
}