let inputImagem = document.querySelector("#imagem-produto");
var urlImagem;
if (inputImagem) {
  inputImagem.addEventListener("change", (img) => {
    const reader = new FileReader();
    const arquivo = img.target.files.item(0);

    reader.readAsDataURL(arquivo);
    reader.addEventListener("load", () => {
      urlImagem = reader.result;
    });
  });
}

const novoProduto = (() => {
  const produtos = JSON.parse(localStorage.getItem("produtos"));
  let nome = document.querySelector("#nome-produto");
  let preco = document.querySelector("#preco-produto");
  let descricao = document.querySelector("#descricao-produto");
  let categoria = document.querySelector("#categoria-produto");
  let imagem = urlImagem;

  const produtoCriado = {
    imagem: imagem,
    nome: nome.value,
    preco: `R$ ${preco.value}`,
    descricao: descricao.value,
    categoria: categoria.value
  }

  dadosAtualizados = [...produtos, produtoCriado];

  localStorage.setItem("produtos", JSON.stringify(dadosAtualizados));

  alert("Produto Cadastrado");

  nome.value = "";
  preco.value = "";
  descricao.value = "";
  categoria.value = "";
  inputImagem.value = null;

});



