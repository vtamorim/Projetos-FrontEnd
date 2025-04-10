
condition_json = false;

function no_text() {
    if(!condition_json){
        warner =  document.createElement("p");
        warner.setAttribute("id", "warner");
        warner.textContent = " 🚀 Nada por aqui — por enquanto. Comece a marcar seus avanços e veja sua jornada ganhar vida!"


        const progress = document.getElementById("progress")


        if (progress)
        {
            progress.textContent = ""
            progress.appendChild(warner)
        }
        else{
            console.error("erro")
        }
        }
}
no_text()


const cards = document.querySelectorAll(".card");
const timeouts = new Map(); // guarda os timeouts pro card

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    cards.forEach(othercard => {
      if (othercard !== card) {
        const timeout = setTimeout(() => {
          othercard.classList.add("dim");
        }, 250);
        timeouts.set(othercard, timeout);
      }
    });
  });

  card.addEventListener("mouseleave", () => {
    cards.forEach(othercard => {
      const timeout = timeouts.get(othercard);
      if (timeout) {
        clearTimeout(timeout); 
        timeouts.delete(othercard);
      }
      othercard.classList.remove("dim");
    });
  });
});

