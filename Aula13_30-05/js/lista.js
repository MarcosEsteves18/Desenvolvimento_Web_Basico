
function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false) 
    request.send()
    return request.responseText
}


function criarLinha(usuario){
    let linha = document.createElement("tr")
    let colId = document.createElement("td")
    let colEmail = document.createElement("td")
    let colSenha = document.createElement("td")
    colId.innerHTML = usuario.id_login_pk
    colEmail.innerHTML = usuario.email
    colSenha.innerHTML = usuario.senha
    linha.appendChild(colId)
    linha.appendChild(colEmail)
    linha.appendChild(colSenha)
    return linha
}

function main(){
    let dados = fazGet("http://localhost:3000/login")
    let tabela = document.getElementById('tb')
    let usuarios = JSON.parse(dados)
    usuarios.forEach(element => {
        let linha = criarLinha(element)
        tabela.appendChild(linha)
    });
}

main()