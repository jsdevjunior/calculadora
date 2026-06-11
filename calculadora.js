let display = document.getElementById("display");

let resultadoExibido = false;

function adicionar(valor){

    if(resultadoExibido){
        display.value = "";
        resultadoExibido = false;
    }

    display.value += valor;
}

function calcular(){

    try{
        let conta = display.value;
        let resultado = eval(conta);

        display.value = conta + " = " + resultado;
        resultadoExibido = true;
    }
    catch{
        display.value = "Erro";
    }
}