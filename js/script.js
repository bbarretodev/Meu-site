const BotaoAlterarTema = document.getElementById("switch");
const body = document.querySelector("body");

BotaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("root");

    body.classList.toggle("light");

});
