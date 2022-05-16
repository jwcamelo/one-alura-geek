const btnLogoff = document.querySelector("#btn-logoff");
window.onload = carregarProdutos;

preencherContainer(starwarsContainer, "star wars");
preencherContainer(consolesContainer, "consoles");
preencherContainer(diversosContainer, "diversos");

btnLogoff.addEventListener("click", () => {
    alert("Logoff efetuado com sucesso");
    window.location.href = "index.html"
})

