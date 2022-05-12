const starwarsContainer = document.querySelector(".starwars__principal");
const consolesContainer = document.querySelector(".consoles__principal");
const diversosContainer = document.querySelector(".diversos__principal");

const preencherContainer = (container, categoria, nome) => {
  cards = selecionaCategoria(categoria);
  cards.forEach((card) => {
    if (card.nome != nome) {
      const img = document.createElement("img");
      img.setAttribute("src", card.imagem);
      img.classList.add("card__img");
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
      const linkEditar = document.createElement("a");
      linkEditar.setAttribute("href", `editar.html?${card.nome}`);
      linkEditar.setAttribute("target", "_blank");
      linkEditar.innerHTML = "Editar";
      linkEditar.classList.add("card__link-editar");
      const linkExcluir = document.createElement("a");
      linkExcluir.setAttribute("href", `excluir.html?${card.nome}`);
      linkExcluir.setAttribute("target", "_blank");
      linkExcluir.innerHTML = "Excluir";
      linkExcluir.classList.add("card__link-excluir");
      const divLink = document.createElement("div");
      const divCard = document.createElement("div");
      divCard.classList.add("card");
      divCard.appendChild(img);
      divCard.appendChild(nome);
      divCard.appendChild(valor);
      divCard.appendChild(link);
      divLink.appendChild(linkEditar);
      divLink.appendChild(linkExcluir);
      divCard.appendChild(divLink);
      container.appendChild(divCard);
    }
  })
};




