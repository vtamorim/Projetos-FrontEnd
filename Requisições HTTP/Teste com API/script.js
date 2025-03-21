async function executar(){
    const list_users = document.getElementById('list_users');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const users = await response.json();

    users.forEach( function (post) {
        const userselement = document.createElement('li');
    
        const title = document.createElement("h2");
        title.textContent = post.title;


        const username = document.createElement("p");
        username.textContent = post.body;

        const userid = document.createElement("span");
        userid.textContent = `Identificador: ${post.userId}`;

        userselement.append(title,username, userid);
        list_users.appendChild(userselement);


    });


}




executar(); 