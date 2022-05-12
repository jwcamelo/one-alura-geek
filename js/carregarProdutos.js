let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
const produtosAntigos = [
  {
    imagem: "../assets/img/capacetestormtrooper.png",
    nome: "Storm Trooper 1",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
    link: "https://www.google.com",
    categoria: "star wars",
  },
  {
    imagem: "../assets/img/minivader.png",
    nome: "Darth Vader",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
    link: "https://www.google.com",
    categoria: "star wars",
  },
  {
    imagem: "../assets/img/boneco.png",
    nome: "Boneco secreto",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
    link: "https://www.google.com",
    categoria: "star wars",
  },
  {
    imagem: "../assets/img/stormtrooper.png",
    nome: "Storm Trooper 2",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
    link: "https://www.google.com",
    categoria: "star wars",
  },
  {
    imagem: "../assets/img/lord.png",
    nome: "Lord Sith",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
    link: "https://www.google.com",
    categoria: "star wars",
  },
  {
    imagem: "../assets/img/babyyoda.png",
    nome: "Baby Yoda",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
    link: "https://www.google.com",
    categoria: "star wars",
  },
  {
    imagem: "../assets/img/joystick.png",
    nome: "Console X",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. XYZ",
    link: "https://www.google.com",
    categoria: "consoles",
  },
  {
    imagem: "../assets/img/console.png",
    nome: "Console e Controle",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. XYZ",
    link: "https://www.google.com",
    categoria: "consoles",
  },
  {
    imagem: "../assets/img/nintendo.png",
    nome: "Console XY",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. XYZ",
    link: "https://www.google.com",
    categoria: "consoles",
  },
  {
    imagem: "../assets/img/consolexyz.png",
    nome: "Console XYZ",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. XYZ",
    link: "https://www.google.com",
    categoria: "consoles",
  },
  {
    imagem: "../assets/img/joystick nintendo.png",
    nome: "Joystick nintendo",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. XYZ",
    link: "https://www.google.com",
    categoria: "consoles",
  },
  {
    imagem: "../assets/img/consolegameboy.png",
    nome: "Console Gameboy",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. XYZ",
    link: "https://www.google.com",
    categoria: "consoles",
  },
  {
    imagem: "../assets/img/camisa-atari.png",
    nome: "Camisa Atari",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
    link: "https://www.google.com",
    categoria: "diversos",
  },
  {
    imagem: "../assets/img/camisa-snes.png",
    nome: "Camisa SNES",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
    link: "https://www.google.com",
    categoria: "diversos",
  },
  {
    imagem: "../assets/img/sonic.png",
    nome: "Miniatura Sonic",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
    link: "https://www.google.com",
    categoria: "diversos",
  },
  {
    imagem: "../assets/img/timer.png",
    nome: "Despertador",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
    link: "https://www.google.com",
    categoria: "diversos",
  },
  {
    imagem: "../assets/img/realidadevirtual.png",
    nome: "Games Realidade Virtual",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
    link: "https://www.google.com",
    categoria: "diversos",
  },
  {
    imagem: "../assets/img/bigpicachu.png",
    nome: "Picachu gigante",
    preco: "R$ 60,00",
    descricao:
      "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
    link: "https://www.google.com",
    categoria: "diversos",
  },
];

const carregarProdutos = () => {
  if (produtos.length == 0) {
    for (let i = 0; i < produtosAntigos.length; i++) {
      produtos.push(produtosAntigos[i]);
    }
    location.reload();
  }

  localStorage.setItem("produtos", JSON.stringify(produtos));
};
