let pedra = document.getElementById("pedra")
let papel = document.getElementById("papel")
let tesoura = document.getElementById("tesoura")
const resultado = document.getElementById("escolha-ia")
const p  = document.createElement("p")
const hr = document.getElementById("hr")
let jogardnv = document.getElementById("jogardnv")
pedra.addEventListener("click",function(){
    aleatorio = Math.floor(Math.random() * 3)
    const lista  = [pedra,papel,tesoura]
    escolha = lista[aleatorio]
    if(pedra == escolha){
        p.innerText = "Empate"
        hr.setAttribute("class","hrdraw")
        p.setAttribute("class","pdraw")
        resultado.setAttribute("id","pedrabot")
    }
    if(escolha == papel){
        p.innerText = "Perdeu"
        hr.setAttribute("class","hrlost")
        p.setAttribute("class","plost")
        resultado.setAttribute("id","papelbot")
    }
    else if (escolha == tesoura){
        p.innerText = "Ganhou"
        hr.setAttribute("class","hrwin")
        p.setAttribute("class","pwin")
        resultado.setAttribute("id","tesourabot")
    }
    resultado.appendChild(p)
    jogardnv.setAttribute("id","again")

})
papel.addEventListener("click",function(){
    aleatorio = Math.floor(Math.random() * 3)
    const lista  = [pedra,papel,tesoura]
    escolha = lista[aleatorio]
    if(papel == escolha){
        p.innerText = "Empate"
        hr.setAttribute("class","hrdraw")
        p.setAttribute("class","pdraw")
        resultado.setAttribute("id","papelbot")
    }
    if(escolha == pedra){
        p.innerText = "Ganhou"
        hr.setAttribute("class","hrwin")
        p.setAttribute("class","pwin")
        resultado.setAttribute("id","pedrabot")
        
        
    }
    if (escolha == tesoura){
        p.innerText = "Perdeu"
        hr.setAttribute("class","hrlost")
        p.setAttribute("class","plost")
        resultado.setAttribute("id","tesourabot")
        
    }
    resultado.appendChild(p)
    jogardnv.setAttribute("id","again")
})
tesoura.addEventListener("click",function(){
    let aleatorio = Math.floor(Math.random() * 3)
    const lista  = [pedra,papel,tesoura]
    escolha = lista[aleatorio]
    if(tesoura == escolha){
        p.innerText = "Empate"
        hr.setAttribute("class","hrdraw")
        p.setAttribute("class","pdraw")
        resultado.setAttribute("id","tesourabot")

    }
    if(escolha == papel){
        p.innerText = "Ganhou"
        hr.setAttribute("class","hrwin")
        p.setAttribute("class","pwin")
        resultado.setAttribute("id","papelbot")
    }
    if(escolha == pedra){
        p.innerText = "Perdeu"
        hr.setAttribute("class","hrlost")
        p.setAttribute("class","plost")
        resultado.setAttribute("id","pedrabot")

    }
    jogardnv.setAttribute("id","again")
    resultado.appendChild(p)
})

