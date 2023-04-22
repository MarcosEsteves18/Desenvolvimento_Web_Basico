function displayRadioValue(){
    let elemento = document.getElementsByName('gender');
    for(let i = 0; i < elemento.length; i++){
        if(elemento[i].checked){
            document.getElementById('result').innerHTML = "Genero selecionando é : " + elemento[i].value;
        }
    }

}

function getCheckBox(){
    let checkBox= document.querySelectorAll('input[type="checkbox"]:checked');
    let text = "";
    for(let i = 0; i < checkBox.length; i++){
        text = text + ", " + checkBox[i].value ;
    }
    document.getElementById("pri").innerHTML = text;
};

function getDate(){
    const data = document.getElementsByName('date')[0].value;
    let data_brasileira = data.split('-').reverse().join('/');

    const text = "Voce nasceu na data de " + data_brasileira ;
    document.getElementById('output').innerHTML = text ;
};   


function getNome(){
    const nome = document.getElementsByName('nome')[0].value;
    const textNome = " Seu nome é " + nome +".";
    
    document.getElementById('resultado').innerHTML = textNome ;
  

};   

function todos(){
    getNome();
    getCheckBox();
    getDate();
    displayRadioValue();

}