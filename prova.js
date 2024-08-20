var usuarios = [];

function adicionarUsuario(nome, idade, email) {
   
    if (!nome || !idade || !email) {
        console.log("Por favor, preencha todos os campos (nome, idade e email).");
        return;
    }

    idade = Number(idade);

    if (isNaN(idade) || idade < 18) {
        console.log("A idade deve ser um número maior ou igual a 18.");
        return;
    }
    
    usuarios.push({ 
         nome: nome,
         idade: idade, 
         email: email });
    console.log("Usuário adicionado com sucesso!");
}

  function mostrarUsuarios() {
    if (usuarios.length == 0) {
        console.log("Nenhum usuário na lista.");
        return;
    }
    
    console.log("Usuários na lista:");

   for (var i = 0; i < usuarios.length; i++) {
    var usuario = usuarios[i];
    console.log(" Nome:" + usuario.nome + "Idade:" + usuario.idade + "Email: " + usuario.email);
    }
}

adicionarUsuario("Vitória", 15, "vitoria_silva18@estudante.sesisenai.org.br");
adicionarUsuario("Larissa", 19, "larissa_schmitz1@estudante.sesisenai.org.br");

mostrarUsuarios();
