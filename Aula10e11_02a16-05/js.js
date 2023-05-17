//function salvar(){
//    var table = document.getElementById("tabela");
//   var nomeTable = row.insertCell().innerHTML = document.getElementById('nome').value;
//    var emailTable = row.insertCell().innerHTML = document.getElementById('email').value;;
//    var nascimentoTable = row.insertCell().innerHTML = document.getElementById('nascimento').value;
//   var estadoTable = row.insertCell().innerHTML = document.getElementById('estado').value;;
//    var acoes = row.insertCell();
//    var row = table.insertRow();

//}

let cont = 2;
function salvar() {
    var table = document.getElementById("tabela");
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var nascimento = document.getElementById('nascimento').value;
    var estado = document.getElementById('estado').value;


    var row = table.insertRow();

    contTable = row.insertCell().innerHTML = cont++;
    var nomeTable = row.insertCell();
    var emailTable = row.insertCell();
    var nascimentoTable = row.insertCell();
    var estadoTable = row.insertCell();
    var acoes = row.insertCell();

    
    nomeTable.innerHTML = nome;
    emailTable.innerHTML = email;
    nascimentoTable.innerHTML = nascimento;
    estadoTable.innerHTML = estado;
    acoes.innerHTML = '<i class="bi bi-pencil-square"></i>'
    
    limpar()
}

function limpar(){
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('nascimento').value = '';
    document.getElementById('estado').value = '';
}
  