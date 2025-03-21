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

lista_background = ['url(../images/thumb1.jpg)','url(../images/thumb2.jpg)','url(../images/thumb3.jpg)']
const section_body = document.getElementById("section_body");
for (let i = 0; i = lista_background.length;   i++)  {
    section_body.addEventListener("click", () => {
        section_body.style.backgroundImage = lista_background[i];
    });
    if (i == lista_background.length - 1) {
        i = 0;
    }
}
