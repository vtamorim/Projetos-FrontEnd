
num_display = document.getElementById("num_display")

span_sec = document.getElementById("span_sec")
condition = ""
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        num_display.textContent += button.value

    });


  });
clear_cond = 0
document.getElementById("clear").addEventListener("click", () => {
    clear_cond +=1 
    if(clear_cond == 1){
        num_display.textContent = ""
    }
    else if(clear_cond == 2){
        span_sec.textContent = ""
    }

})

document.getElementById("mais").addEventListener("click", () => {
   condition = "mais"
})

document.getElementById("menus").addEventListener("click", () => {
    condition = "menos"
})

document.getElementById("divi").addEventListener("click", () => {
    condition = "divisão"
})

document.getElementById("multi").addEventListener("click", () => {
    condition = "multiplicação"
})



document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        if (!num_display.textContent == ""){
            span_sec.textContent  = num_display.textContent
            num_display.textContent  = ""
        }
    })
});




document.getElementById("equals").addEventListener("click", () => {
    switch(condition){
        case "mais":
            num_display.textContent = Number(num_display.textContent) + Number(span_sec.textContent)
            break
        case "menos":
            num_display.textContent = Number(num_display.textContent) - Number(span_sec.textContent)
            break
        case "multiplicação":
            num_display.textContent = Number(num_display.textContent) * Number(span_sec.textContent)
            break
        case "divisão":
            num_display.textContent = Number(span_sec.textContent) / Number(num_display.textContent)
            break
    
    default:
    
        }
    span_sec.textContent = ""
})