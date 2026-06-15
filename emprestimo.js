function registrarEmprestimo() {
    const usuario = document.getElementById("nomeUsuario").value;
    const livro = document.getElementById("nomeLivro").value;
    document.getElementById("mensagem").textContent =
        `Empréstimo registrado para ${usuario}: ${livro}`;
}
