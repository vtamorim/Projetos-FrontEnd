let button  = document.getElementById("buttongerar");
let resultado = document.getElementById("resultado");
const alfa = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%¨&*()+";

button.addEventListener("click", function() {
    let tamanho = parseInt(document.getElementById("tamanho").value);
    let senha = '';  // Reseta a senha sempre que o botão for clicado

    // Gera a senha
    for (let i = 0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * alfa.length);
        senha += alfa[randomIndex];
    }
    if( isNaN(tamanho) || tamanho <= 0){
        outrop = document.createElement("p")
        outrop.setAttribute("id","erro")
        document.getElementById("gerador-senha").appendChild(outrop)
        outrop.innerText = "Insira um número válido"
    }

    // Cria o parágrafo apenas uma vez
    resultado.innerHTML = '';  // Limpa o resultado anterior
    resultado.innerText = senha
    resultado.appendChild(p);
});
