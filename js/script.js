
if (document.getElementById("navigateBtnIndex")) {
    document.getElementById("navigateBtnIndex").addEventListener("click", function() {
        window.location.href = "paginas/contato.html";
    });
}

if (document.getElementById("navigateBtnContact")) {
    document.getElementById("navigateBtnContact").addEventListener("click", function() {
        window.location.href = "../index.html";
    });
}

if (document.getElementById("navigateBtnSobre")) {
    document.getElementById("navigateBtnSobre").addEventListener("click", function() {
        // Verifica se está na pasta 'paginas' ou na raiz
        const path = window.location.pathname;
        if (path.includes("/paginas/")) {
            // Se estiver dentro da pasta 'paginas', use caminho relativo
            window.location.href = "sobre.html";
        } else {
            // Se estiver na raiz, use caminho absoluto
            window.location.href = "paginas/sobre.html";
        }
    });
}


let usuariosArray = []; 

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

    const li = document.createElement("li");
    li.innerHTML = `${nome} - ${email} <button onclick='removeUser("${email}")'>Remover</button>`;
    document.getElementById("listausers").appendChild(li);

    document.getElementById("nomeUsuario").value = "";
    document.getElementById("emailUsuario").value = "";
}

function removeUser(email) {
    usuariosArray = usuariosArray.filter(usuario => usuario.email !== email);

    console.log("Usuário removido com sucesso!");

    atualizarListaUsuarios();
}

function atualizarListaUsuarios() {
    const lista = document.getElementById("listausers");
    lista.innerHTML = "";

    usuariosArray.forEach(usuario => {
        const li = document.createElement("li");
        li.innerHTML = `${usuario.nome} - ${usuario.email} <button onclick='removeUser("${usuario.email}")'>Remover</button>`;
        lista.appendChild(li);
    });
}

function enviaProBack() {
    console.log("Enviado para o back, o resto os dev fazem!");
}

const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    console.log("Nome: " + name);
    console.log("Email: " + email);

    alert("Formulário interceptado! Não quero enviar pro back.");
});

function exibirUsuarios() {
    usuariosArray.forEach(usuario => {
        console.log(`Usuário: ${usuario.nome} - Email: ${usuario.email}`);
    });
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Nome: " + name);
    console.log("Email: " + email);
    console.log("Mensagem: " + message);

    alert("Formulário enviado com sucesso!");
});
