
book_form = document.getElementById("book_form");
book_form.addEventListener("submit", (event) => {

    event.preventDefault();
    const namebook = document.getElementById("namebook").value;
    const pages_total = parseInt(document.getElementById("pages_total").value);
    const pages_read = parseInt(document.getElementById("pages_read").value);

    localStorage.setItem(namebook, JSON.stringify({name: namebook, total : pages_total, read: pages_read}));


    
   const progress_save = JSON.parse(localStorage.getItem(namebook)) 

   livro_info = document.getElementById("livro_info");

   if(progress_save){
    livro_info.innerHTML = `
        <p>${progress_save.name}</p>
        <progress value = "${progress_save.read}" max = "${progress_save.total}"></progress>
    `;
   }
});