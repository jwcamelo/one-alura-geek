const produtos = JSON.parse(localStorage.getItem("produtos"));
const nome = window.location.href.split("?")[1].replaceAll("%20", " ");
let inputNome = document.querySelector("#nome-produto");
let inputPreco = document.querySelector("#preco-produto");
let inputDescricao = document.querySelector("#descricao-produto");
let inputCategoria = document.querySelector("#categoria-produto");
let inputImagem = document.querySelector("#imagem-produto");

const btnAtualizar = document.querySelector("#btn-atualizar-produto");

var urlImagem = null;
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

function preencherCampos(nome) {
    produtos.forEach((produto) => {
        if (produto.nome === nome) {
            console.log(produto);
            inputNome.value = produto.nome;
            inputPreco.value = produto.preco;
            inputDescricao.value = produto.descricao;
            inputCategoria.value = produto.categoria;
        }
    });
}

function atualizarProdutos(nome) {
    produtos.forEach((produto) => {
        if (produto.nome === nome) {
            console.log(produto);
            produto.nome = inputNome.value;
            produto.preco = inputPreco.value;
            produto.descricao = inputDescricao.value;
            produto.categoria = inputCategoria.value;
            if (urlImagem) {
                produto.imagem = urlImagem;
            }
        }
    });

    localStorage.setItem("produtos", JSON.stringify(produtos));
    window.location.href = `produto.html?${inputNome.value}`
}

preencherCampos(nome)
btnAtualizar.addEventListener("click", (event) => {
    event.preventDefault();
    atualizarProdutos(nome)
}

)
