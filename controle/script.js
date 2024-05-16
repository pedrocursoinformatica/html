

// Função para lidar com o clique nos botões
function funcaoDoJavaScript(acao) {
    if (acao === 'frente') {
        // Se o botão "frente" for clicado
        alert('Você clicou no botão "frente"!');
        // Adicione aqui o código que deseja executar para a ação "frente"
    } else if (acao === 're') {
        // Se o botão "re" for clicado
        alert('Você clicou no botão "re"!');
        // Adicione aqui o código que deseja executar para a ação "re"
    } else if (acao === "esquerda") {
         // Se o botão "esquerda" for clicado
        alert('Você clicou o botão "esquerda"!');
        // Adicione aqui o código que deseja executar para a ação "esquerda"
    }else if (acao==="direita") {
        // Se o botão "direita" for clicado
        alert('Você clicou o botão "direita"!'); 
          // Adicione aqui o código que deseja executar para a ação "direita"
    }
    else {
        // Caso algum outro valor seja passado
        alert('Opção inválida!');
    }

}