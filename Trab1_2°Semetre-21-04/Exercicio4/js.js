    function calcularNotas(event){
        const dados = document.querySelectorAll('input');
        const nome = document.getElementsByName('nome')[0].value;
        const nota1 = parseFloat(document.getElementsByName('nota1')[0].value);
        const nota2 = parseFloat(document.getElementsByName('nota2')[0].value);
        const nota3 = parseFloat(document.getElementsByName('nota3')[0].value);
        const nota4 = parseFloat(document.getElementsByName('nota4')[0].value);

    const mediaNota = parseFloat(nota1 + nota2 + nota3 + nota4) / 4;
    let situacao = '';
   
    if(mediaNota < 2.0){
        situacao = 'Reprovado';
        cor = 'reprovado';
    }else if (mediaNota >= 2.1 && mediaNota <= 5.9 ){
        situacao = 'Recuperação';
        cor = 'recuperacao';
    }else if(mediaNota > 6.0){
        situacao = 'Aprovado';
        cor = 'aprovado';
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "O aluno "+ nome + ", obteve média " + mediaNota + " e está " + situacao + ".";
    resultado.classList.add(cor);
    return false;
    };

