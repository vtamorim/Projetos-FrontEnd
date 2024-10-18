let input = parseInt(document.getElementById("tamanho").value)
let button  = document.getElementById("buttongerar")
let resultado = document.getElementById("resultado")
const alfa = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%¨&*()+"
let senha = undefined
let nov_senha = " "  
const p  = document.createElement("p")
button.addEventListener("click",function(){
    let pass = "";
    for(let i = 0;i++;i <= input){
        pass += alfa.charAt(Math.floor(Math.random() * alfa.length));
    }
    p.innerHTML = pass
    resultado.appendChild(p)
    console.log(p)
})
function copyPassord(){
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(nov_Senha);
}