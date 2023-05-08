
function euQueFiz(){
    // numero = document.getElementById('numero').value;
    //document.getElementById('resultab').innerHTML = `<p> ${"Tabuada do : " + numero} </p>`
    
    // i, f, result;
    //for(i = 0; i <= 10; i++){
    //    result = numero * i;
   //     document.getElementById('resultab').innerHTML = `<p> ${numero + " x " +  i + " = " + result } </p>`
   // }
    
}

function tabuada(){
    let numero = document.getElementById('numero').value;
    let divisoria = document.getElementById('resultab');
    for(let i = 1; i <= 10; i++){
        let result = i * numero;
        const node = document.createElement("p");
        const text = document.createTextNode (` ${numero + " x " +  i + " = " + result}`);
        node.appendChild(text);
        divisoria.appendChild(node);
    }
}

function textoH(){
    let numero2 = document.getElementById('numero2').value;
    let divisoria = document.getElementById('result2');
    for(let j = 0; j< numero2; j++){
        
        let node = document.createElement("h1");
        let text = document.createTextNode ("texto h1");
        node.appendChild(text);
        divisoria.appendChild(node);
    }
}

let click = 0;
function contaClique(){
    click++;
    document.getElementById("clique").innerHTML = click;
}

function sorteador(){
    let sorteador = document.getElementById("sorteador");
    sorteio.innerHTML = Math.floor(11 * Math.random());

}

function sorteador2(){
    let entre = parseInt(document.getElementById('entre').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteador2 = parseInt((Math.random()*(ate - entre +1)+ entre));
    document.getElementById('sorteador2').innerHTML = `O valor sorteado é ${sorteador2}`;   
}