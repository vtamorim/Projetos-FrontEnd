form_cadastro = document.getElementById("form_cadastro");
form_login = document.getElementById("form_login");


form_cadastro.addEventListener("submit", (event) => {
    event.preventDefault();

    const cad_username = document.getElementById("cad_username").value;
    const cad_password = document.getElementById("cad_password").value;
   
    if (localStorage.getItem(cad_username)){
        document.getElementById("resultado").textContent = "Cadastro deu errado";
    }
    else{
        document.getElementById("resultado").textContent = "Cadastro deu certo";
        localStorage.setItem(cad_username, JSON.stringify({ username: cad_username, password: cad_password }));
    }
});


form_login.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const usuarioSalvo = JSON.parse(localStorage.getItem(username));

    if(usuarioSalvo && usuarioSalvo.password === password){
        document.getElementById("resultado").textContent = "Login deu certo";
    }
    else{
        document.getElementById("resultado").textContent = "Login deu errado";
    }
});
