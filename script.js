/*function mostrarMouse(event) {
    console.log(`Eixo X: ${event.pageX} e Eixo Y: ${event.pageY}`);
}
window.onclick = mostrarMouse;*/


/*function alerta(event){
    if(event.pageX <= 100 && event.pageY <= 10){
        alert("!!!!!NÃO SAIA DA PAGINA SEU ARROMBADOOO!!!!!")
    }
    
}

window.onmousemove = alerta;*/

let caixaDeTexto = document.querySelector("input");
let botao = document.querySelector("button");
let div = document.querySelector("div");
let section = document.querySelector("section");
let h2 = document.querySelector("h2");
let a = document.querySelector("a");

if(localStorage.nome){
    div.style.display = "none";
    section.style.display = "initial";
    h2.innerHTML = `seja bem vindo ${localStorage.nome}`;
    a.innerHTML = `Você não é ${localStorage.nome} ?`;
} else {
    function colocarSeuNome() {
        div.style.display = "initial";
        localStorage.setItem("nome",caixaDeTexto.value);
        if(localStorage.nome){
            div.style.display = "none";
            section.style.display = "initial";
            h2.innerHTML = `seja bem vindo ${localStorage.nome}`;
            a.innerHTML = `Você não é ${localStorage.nome} ?`;
        }
    }
}

function resetar() {
    localStorage.removeItem("nome");
    
}
a.onclick = resetar
botao.onclick = colocarSeuNome;