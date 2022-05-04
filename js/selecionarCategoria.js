const selecionaCategoria = (categoria) => {
    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    let produtosCategoria = [];
    produtos.forEach(produto => {
        if (produto.categoria == categoria) {
            produtosCategoria.push(produto);
        }
    })
    return produtosCategoria;
}

