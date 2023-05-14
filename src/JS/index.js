const btn_Alterar = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const btn_Img_tema = document.querySelector(".imagem-botao");

btn_Alterar.addEventListener("click", () => {

    const modo_Escuro_ativo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modo_Escuro_ativo == true) {
        //body.classList.remove("modo-escuro");
        btn_Img_tema.setAttribute("src", "/src/imagens/sun.png");

    } else {
       // body.classList.add("modo-escuro");
        btn_Img_tema.setAttribute("src", "/src/imagens/moon.png");
    }

});









