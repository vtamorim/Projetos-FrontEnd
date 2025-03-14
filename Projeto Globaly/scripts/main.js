const elementos = document.querySelectorAll(".child_item");

elementos.forEach(elemento => { 
    const ancora = elemento.querySelector(".itens_link"); 
    
    if (ancora) {
        elemento.addEventListener("mouseover", () => {
            ancora.style.color = "white";
        });

        elemento.addEventListener("mouseout", () => {
            ancora.style.color = "black"; 
        });
    }
});
