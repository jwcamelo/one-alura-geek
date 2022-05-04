const nome = window.location.href.split("?")[1].replaceAll("%20", " ");
const titulo = document.querySelector(".produto__titulo");
const img = document.querySelector(".produto__img");
const preco = document.querySelector(".produto__preco");
const descricao = document.querySelector(".produto__descricao");

carregarProduto(nome);

function carregarProduto(nome) {
    let produtos = JSON.parse(localStorage.getItem("produtos"));

    produtos.forEach(produto => {

        if (produto.nome === nome) {
            console.log(produto);

            titulo.innerHTML = produto.nome;
            img.setAttribute("src", produto.imagem);
            preco.innerHTML = produto.preco;
            descricao.innerHTML = produto.descricao;
        }
    });

}



