const starwarsContainer = document.querySelector(".starwars__principal");
const consolesContainer = document.querySelector(".consoles__principal");
const diversosContainer = document.querySelector(".diversos__principal");

const preencherContainer = (container, categoria) => {
  cards = selecionaCategoria(categoria);
  cards.forEach((card) => {
    const img = document.createElement("img");
    img.setAttribute("src", card.imagem);
    const nome = document.createElement("h3");
    nome.classList.add("card__produto");
    nome.innerHTML = card.nome;
    const valor = document.createElement("h3");
    valor.classList.add("card__valor");
    valor.innerHTML = card.preco;
    const link = document.createElement("a");
    link.setAttribute("href", `produto.html?${card.nome}`);
    link.setAttribute("target", "_blank");
    link.innerHTML = "Ver produto";
    link.classList.add("card__link");
    link.setAttribute("src", card.link);
    const divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.appendChild(img);
    divCard.appendChild(nome);
    divCard.appendChild(valor);
    divCard.appendChild(link);
    container.appendChild(divCard);
  });
};
