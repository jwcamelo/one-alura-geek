const starwarsContainer = document.querySelector(".starwars__principal");
const consolesContainer = document.querySelector(".consoles__principal");
const diversosContainer = document.querySelector(".diversos__principal");
const largura = window.screen.width;

const cards = {
  starwars: [
    {
      img: "../assets/img/capacetestormtrooper.png",
      nome: "Storm Trooper 1",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/minivader.png",
      nome: "Darth Vader",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/boneco.png",
      nome: "Boneco secreto",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/stormtrooper.png",
      nome: "Storm Trooper 2",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/lord.png",
      nome: "Lord Sith",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/babyyoda.png",
      nome: "Baby Yoda",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
  ],
  consoles: [
    {
      img: "../assets/img/joystick.png",
      nome: "Console XYZ",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/console.png",
      nome: "Console e Controle",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/nintendo.png",
      nome: "Console XYZ",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/consolexyz.png",
      nome: "Console XYZ",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/joystick nintendo.png",
      nome: "Joystick nintendo",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/consolegameboy.png",
      nome: "Console Gameboy",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
  ],
  diversos: [
    {
      img: "../assets/img/camisa-atari.png",
      nome: "Camisa Atari",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/camisa-snes.png",
      nome: "Camisa SNES",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/sonic.png",
      nome: "Miniatura Sonic",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/timer.png",
      nome: "Despertador",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/realidadevirtual.png",
      nome: "Games Realidade Virtual",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
    {
      img: "../assets/img/bigpicachu.png",
      nome: "Picachu gigante",
      preco: "R$ 60,00",
      link: "https://www.google.com",
    },
  ],
};

var htmlStarwars = "";
var htmlConsoles = "";
var htmlDiversos = "";
// mostrar a quantidade de elementos de acordo com a largura da tela
if (largura < 1080) {
  for (let i = 0; i < 4; i++) {
    htmlStarwars += `
            <div class="card">
                <img class="card__img" src="${cards.starwars[i].img}" alt="imagem do produto">
                <h3 class="card__produto">${cards.starwars[i].nome}</h3>
                <h3 class="card__valor">${cards.starwars[i].preco}</h3>
                <a class="card__link" href=${cards.starwars[i].link}>Ver produto</a>
            </div>
        `;

    htmlConsoles += `
            <div class="card">
                <img class="card__img" src="${cards.consoles[i].img}" alt="imagem do produto">
                <h3 class="card__produto">${cards.consoles[i].nome}</h3>
                <h3 class="card__valor">${cards.consoles[i].preco}</h3>
                <a class="card__link" href=${cards.consoles[i].link}>Ver produto</a>
            </div>
        `;

    htmlDiversos += `
            <div class="card">
                <img class="card__img" src="${cards.diversos[i].img}" alt="imagem do produto">
                <h3 class="card__produto">${cards.diversos[i].nome}</h3>
                <h3 class="card__valor">${cards.diversos[i].preco}</h3>
                <a class="card__link" href=${cards.diversos[i].link}>Ver produto</a>
            </div>
        `;
  }
} else {
  for (let i = 0; i < 6; i++) {
    htmlStarwars += `
            <div class="card">
                <img class="card__img" src="${cards.diversos[i].img}" alt="imagem do produto">
                <h3 class="card__produto">${cards.diversos[i].nome}</h3>
                <h3 class="card__valor">${cards.diversos[i].preco}</h3>
                <a class="card__link" href=${cards.diversos[i].link}>Ver produto</a>
            </div>
        `;
    htmlConsoles += `
            <div class="card">
                <img class="card__img" src="${cards.consoles[i].img}" alt="imagem do produto">
                <h3 class="card__produto">${cards.consoles[i].nome}</h3>
                <h3 class="card__valor">${cards.consoles[i].preco}</h3>
                <a class="card__link" href=${cards.consoles[i].link}>Ver produto</a>
            </div>
        `;

    htmlDiversos += `
            <div class="card">
                <img class="card__img" src="${cards.diversos[i].img}" alt="imagem do produto">
                <h3 class="card__produto">${cards.diversos[i].nome}</h3>
                <h3 class="card__valor">${cards.diversos[i].preco}</h3>
                <a class="card__link" href=${cards.diversos[i].link}>Ver produto</a>
            </div>
        `;
  }
}

starwarsContainer.innerHTML = htmlStarwars;
consolesContainer.innerHTML = htmlConsoles;
diversosContainer.innerHTML = htmlDiversos;

// mostrar todos os elementos do array

// cards.starwars.map((item)=>
//     htmlStarwars+=`
//     <div class="card">
//         <img class="card__img" src="${item.img}" alt="capacete stormtrooper">
//         <h3 class="card__produto">${item.nome}</h3>
//         <h3 class="card__valor">${item.preco}</h3>
//         <a class="card__link" href=${item.link}>Ver produto</a>
//     </div>
//     `
// );

// cards.consoles.map((item)=>
//     htmlConsoles += `
//     <div class="card">
//         <img class="card__img" src="${item.img}" alt="imagem do produto">
//         <h3 class="card__produto">${item.nome}</h3>
//         <h3 class="card__valor">${item.preco}</h3>
//         <a class="card__link" href=${item.link}>Ver produto</a>
//     </div>
//     `
// );

// cards.diversos.map((item)=>
//     htmlDiversos += `
//     <div class="card">
//         <img class="card__img" src="${item.img}" alt="imagem do produto">
//         <h3 class="card__produto">${item.nome}</h3>
//         <h3 class="card__valor">${item.preco}</h3>
//         <a class="card__link" href=${item.link}>Ver produto</a>
//     </div>
//     `
// );
