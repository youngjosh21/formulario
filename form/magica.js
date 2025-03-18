function adicionarCliente() {
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value; 
    
    if (nome === '' || telefone === '' || email === '') {
        alert('Preencha todos os campos!');
        return;
    }
    
    let tabela = document.getElementById('listaClientes');
    let novaLinha = tabela.insertRow();
    
    // nome, telefone e email
    novaLinha.insertCell(0).innerText = nome;
    novaLinha.insertCell(1).innerText = telefone;
    novaLinha.insertCell(2).innerText = email;
    
    //  botão de excluir
    let acaoCell = novaLinha.insertCell(3);
    let botaoExcluir = document.createElement('button');
    botaoExcluir.innerText = 'Excluir';
    botaoExcluir.classList.add('btn-excluir');
    botaoExcluir.onclick = function () {
        tabela.deleteRow(novaLinha.rowIndex - 1);
    };
    
    acaoCell.appendChild(botaoExcluir);
    
    // Limpando os campos após adicionar o cliente
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = ''; 
}
