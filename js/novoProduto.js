const novoProduto = () => {
  let imagem = document.querySelector("#imagem-produto").value;
  let nome = document.querySelector("#nome-produto").value;
  let preco = document.querySelector("#preco-produto").value;
  let descricao = document.querySelector("#descricao-produto").value;
  let categoria = document.querySelector("#categoria-produto").value;

  const dadosProduto = {
    imagem,
    nome,
    preco,
    descricao,
    categoria,
  };

  const dadosAtualizados = [...produtos, dadosProduto];
  localStorage.setItem("produtos", JSON.stringify(dadosAtualizados));
};
