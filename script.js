
let totalLivros = 0;

function cadastrarLivro() {
    const titulo = document.getElementById("titulo").value;
    const item = document.createElement("li");
    item.textContent = titulo;
    document.getElementById("listaLivros")
        .appendChild(item);
    totalLivros++;
    document.getElementById("contador")
        .textContent = totalLivros;
}

function mensagemBoasVindas() {
    document.getElementById("mensagem").textContent = "Bem-vindo ao Sistema de Biblioteca!";
}