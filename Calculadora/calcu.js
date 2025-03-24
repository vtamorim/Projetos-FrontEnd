
num_display = document.getElementById("num_display")


document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        num_display.textContent += button.value

    });


  });
document.getElementById("clear").addEventListener("click", () => {
    num_display.textContent  =""
})

