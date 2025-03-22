const gameform  = document.getElementById("gameform");
const titlegame = document.getElementById("title_game");
const descgame  = document.getElementById("desc_game");
const ratinggame = document.getElementById("rating_game");
const listgames = document.getElementById("gameslist");

gameform.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = titlegame.value;
    const desc = descgame.value;
    const rating = ratinggame.value;

    infogame(title, desc, rating);
});

async function infogame(title, desc, rating) {
    try {
        const resposta = await fetch("http://localhost:3000/games", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, desc, rating })
        });

        if (!resposta.ok) {
           console.error("Erro ao adicionar o jogo!");
        }

        console.log("Jogo adicionado com sucesso!");
        buscarJogos(); // Atualiza a lista de jogos

    } catch (erro) {
        console.error("Erro na requisição:", erro);
    }
}


async function buscarJogos() {
    try {
        const resposta = await fetch("http://localhost:3000/games");
        const jogos = await resposta.json();

        listgames.innerHTML = ""; // Limpa a lista antes de atualizar

        jogos.forEach(jogo => {

            const item = document.createElement("li");
            const title_card = document.createElement("span");
            const desc_card = document.createElement("span");
            const rating_card = document.createElement("span");
            rating_card.textContent = `Nota:${jogo.rating}`
            desc_card.textContent = `${jogo.desc}`
            title_card.textContent = `${jogo.title}`
            title_card.className = "heading"
            item.append(title_card,desc_card,rating_card)
            listgames.appendChild(item);
        });

    } catch (erro) {
        console.error("Erro ao buscar jogos:", erro);
    }
}


buscarJogos();
