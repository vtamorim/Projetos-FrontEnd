const add_list = document.getElementById("add_list");
const button = document.getElementById("button");
const list_do = document.getElementById("list_do");

button.addEventListener("click", async (event) => {
    event.preventDefault();
    const add = add_list.value;

    const todos = await fetchTodos();
    const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;

    await info({ id: newId, add });
});

async function fetchTodos() {
    try {
        const resposta = await fetch("http://localhost:3000/todolist");
        return await resposta.json();
    } catch (erro) {
        console.error("Erro ao buscar afazeres:", erro);
        return [];
    }
}


async function info(todo) {
    try {
        const resultado = await fetch("http://localhost:3000/todolist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo)
        });

        if (!resultado.ok) {
            console.error("Erro ao adicionar o item!");
            return;
        }

        console.log("Item adicionado com sucesso!");
        await todoList();
    } catch (erro) {
        console.error("Erro na requisição:", erro);
    }
}


async function todoList() {
    try {
        const todos = await fetchTodos();

        todos.sort((a, b) => a.id - b.id);

        list_do.innerHTML = "";

        todos.forEach(todo => {
            const item = document.createElement("li");
            const title_card = document.createElement("span");
            const ex_but_img=  document.createElement("button")
            ex_but_img.setAttribute("id","buttonli")
            ex_but_img.type = "submit"
            const edi_button = document.createElement("button")
            edi_button.setAttribute("id", "sebutli")
            ex_but_img.type = "submit"
            title_card.textContent = todo.add; 
            item.append(title_card,ex_but_img,edi_button
            );
            list_do.appendChild(item);
        });

    } catch (erro) {
        console.error("Erro ao buscar afazeres:", erro);
    }
}


todoList();
