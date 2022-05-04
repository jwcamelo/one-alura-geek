const novoProduto = () => {

    let imagem = document.querySelector("#imagem-produto").value;
    let nome = document.querySelector("#nome-produto").value;
    let preco = document.querySelector("#preco-produto").value;
    let descricao = document.querySelector("#descricao-produto").value;
    let categoria = document.querySelector("#categoria-produto").value;
    let link = "teste";

    const dadosProduto = {
        imagem,
        nome,
        preco,
        descricao,
        link,
        categoria,
    }


    const dadosAtualizados = [...produtos, dadosProduto,];
    localStorage.setItem("produtos", JSON.stringify(dadosAtualizados));
}