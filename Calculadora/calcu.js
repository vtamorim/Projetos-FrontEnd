document.addEventListener("DOMContentLoaded",function(){
    const buttons  = document.querySelectorAll("button");
    buttons.forEach(function(button){
        button.addEventListener("click",function(){
            console.log(parseInt(buttons.value))
        })
    })
})