const nome = window.location.href.split("?")[1].replaceAll("%20", " ");
const btnExcluir = document.querySelector(".btnExcluir")

function excluirProduto(nome) {
    let produtos = JSON.parse(localStorage.getItem("produtos"));
    produtos.forEach((produto) => {
        if (produto.nome === nome) {
            console.log(produtos);
            const index = produtos.indexOf(produto);
            produtos.splice(index, 1);
            console.log(produtos)
            localStorage.setItem("produtos", JSON.stringify(produtos));
            alert("Produto excluido com sucesso")
            window.location.href = "index.html";

        }
    });


}

btnExcluir.addEventListener("click", () => { excluirProduto(nome) });