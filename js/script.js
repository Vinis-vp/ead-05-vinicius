/* ATENÇÃO: Não mexer nesse código, pode quebrar o sistema */

// Navegação para a tela de contato
document.getElementById("navigateBtn").addEventListener("click", function() {
    window.location.href = "paginas/contato.html";  // Redireciona para 'contato.html' ao clicar no botão
});

// Array para armazenar os usuários
let usuariosArray = []; 

// Função para adicionar usuário
function adicionarUsuario() {
    const nome = document.getElementById("nomeUsuario").value;
    const email = document.getElementById("emailUsuario").value;

    if (nome === "" || email === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const usuario = { nome: nome, email: email };
    usuariosArray.push(usuario);

    console.log(usuariosArray);

    // Adiciona o usuário à lista na tela
    const li = document.createElement("li");
    li.innerHTML = `${nome} - ${email} <button onclick='removeUser("${email}")'>Remover</button>`;
    document.getElementById("listausers").appendChild(li);

    // Limpa os campos do formulário
    document.getElementById("nomeUsuario").value = "";
    document.getElementById("emailUsuario").value = "";
}

// Função para remover usuário
function removeUser(email) {
    // Encontra e remove o usuário com o email correspondente
    usuariosArray = usuariosArray.filter(usuario => usuario.email !== email);

    console.log("Usuário removido com sucesso!");

    // Atualiza a lista na tela
    atualizarListaUsuarios();
}

// Função para atualizar a lista de usuários
function atualizarListaUsuarios() {
    const lista = document.getElementById("listausers");
    lista.innerHTML = "";

    usuariosArray.forEach(usuario => {
        const li = document.createElement("li");
        li.innerHTML = `${usuario.nome} - ${usuario.email} <button onclick='removeUser("${usuario.email}")'>Remover</button>`;
        lista.appendChild(li);
    });
}

// Função para simular o envio ao backend
function enviaProBack() {
    console.log("Enviado para o back, o resto os dev fazem!");
}

// Função de interceptação de envio do formulário
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    console.log("Nome: " + name);
    console.log("Email: " + email);

    alert("Formulário interceptado! Não quero enviar pro back.");
});

// Função para exibir todos os usuários no console
function exibirUsuarios() {
    usuariosArray.forEach(usuario => {
        console.log(`Usuário: ${usuario.nome} - Email: ${usuario.email}`);
    });
}
