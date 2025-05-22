
async function executar(){
    input_search = document.getElementById("input_search")

    const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=8de5cc28');

    const users = await response.json();
    const myarray = Object.entries(users)
    myarray.forEach( function (post) {
        console.log(post)
        const userselement = document.createElement('div');
    
        const title = document.createElement("h2");
        title.textContent = post;


        const username = document.createElement("p");
        username.textContent = post.type;

        const userid = document.createElement("span");
        userid.textContent = `Ano: ${post.y}`;

        userselement.append(title,username, userid);
        document.getElementById("geral_box").appendChild(userselement);


    });


}






executar(); 