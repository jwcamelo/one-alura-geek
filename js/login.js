const btnLogin = document.querySelector("#btn-login");
const inputLogin = document.querySelector("#input-login");
const inputSenha = document.querySelector("#input-senha");

let estaLogado = false;

const logar = () => {
    if (inputLogin.value == "admin" && inputSenha.value == "admin") {
        alert("Login efetuado com sucesso!");
        window.location.href = "index.html?true";
        estaLogado = true;
    } else {
        alert("Login e/ou senha inválidos");
        estaLogado = false;
    }
}

btnLogin.addEventListener("click", logar);


