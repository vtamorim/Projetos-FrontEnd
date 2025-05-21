const elementos = document.querySelectorAll(".child_item");
const section_body = document.getElementById("section_body");

const first_box = document.getElementById("first_box")

const first_button = document.createElement("button")
first_button.setAttribute("id","fiseta_button");


const second_button = document.createElement("button")
second_button.setAttribute("id", "secseta_button");


const box_buttons = document.createElement("div")


section_body.removeChild(first_box)

box_buttons.append(first_button,first_box,second_button)



section_body.appendChild(box_buttons)




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
//
lista_background = ['url(../images/thumb1.jpg)','url(../images/thumb2.jpg)','url(../images/thumb3.jpg)']

contador = 0
second_button.addEventListener("click", () => {
    section_body.style.backgroundImage = lista_background[contador]
    contador += 1
    if (contador >=3){
        contador = 0
    }
})

first_button.addEventListener("click", () => {
    section_body.style.backgroundImage = lista_background[contador]
    contador -= 1
    if (contador <= -1){
        contador = 2
    }
})



first_button.onclick =() =>{
    section_body.classList.remove("animate");
    void section_body.offsetWidth;
    section_body.classList.add("animate");


    first_box.classList.remove("secon_animate")
    void first_box.offsetWidth;
    first_box.classList.add("secon_animate")
}


second_button.onclick =() =>{
  section_body.classList.remove("animate");
  void section_body.offsetWidth;
  section_body.classList.add("animate");

  first_box.classList.remove("secon_animate")
  void first_box.offsetWidth;
  first_box.classList.add("secon_animate")
}





first_button.addEventListener("mouseenter", () => {
  first_button.style.backgroundColor = "white";
  first_button.style.backgroundImage = 'url(../images/seta_left_black.svg)'
});

first_button.addEventListener("mouseleave", () => {
  first_button.style.backgroundColor = "#35BDC3";
  first_button.style.backgroundImage =  'url(../images/seta_left_white.svg)'
});







second_button.addEventListener("mouseenter", () => {
  second_button.style.backgroundColor = "white";
  second_button.style.backgroundImage = 'url(../images/seta_right_black.svg)'
});

second_button.addEventListener("mouseleave", () => {
  second_button.style.backgroundColor = "#35BDC3";
  second_button.style.backgroundImage =  'url(../images/seta_right_white.svg)'
});