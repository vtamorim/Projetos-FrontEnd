x_ = document.getElementById("x_")


cells = document.querySelectorAll(".cell")

cells.forEach(element => {
    element.addEventListener("click", () =>{
        element.appendChild(x_)
    })
});




