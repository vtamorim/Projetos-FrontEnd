const button = document.getElementById("button");
const horas = document.getElementById("hour");
const minutos = document.getElementById("minutes");
const segundosEl = document.getElementById("seconds");

button.addEventListener("click", () => {
    let input_sec = parseInt(document.getElementById("input_segundos").value); // Pegando o valor no clique
    
    if (isNaN(input_sec) || input_sec < 0 ) {
        alert("Digite um número válido!");
        return;
    }
    if (input_sec >=60){
        input_sec = 
    }
    segundosEl.textContent = input_sec; // Atualiza o HTML com o valor inicial
    
    const intervalo = setInterval(() => {
        input_sec--; // Diminui o número
        segundosEl.textContent = input_sec; // Atualiza o HTML

        if (input_sec <= 0) {
            clearInterval(intervalo); // Para quando chegar a zero
        }
    }, 1000);
});
