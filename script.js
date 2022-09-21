/*
    La letra 'a' es convertida en 'ai'
    La letra 'e' es convertida en 'enter'
    La letra 'i' es convertida en 'imes'
    La letra 'o' es convertida en 'ober'
    La letra 'u' es convertida en 'ufat'
*/


function btnEncriptar(){
    var texto_entrada = document.getElementById("mensaje-id");
    var texto_salida = document.getElementById("mensaje-encriptado-id");
    var strEncripted = encriptar(texto_entrada.value);
    texto_salida.innerText = strEncripted;
    texto_entrada.value="";
}

function encriptar(strEncripted){
    let matrix_encriptado = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    strEncripted = strEncripted.toLowerCase();

    for(let i=0;i<matrix_encriptado.length;i++){
        if(strEncripted.includes(matrix_encriptado[i][0])){
            strEncripted = strEncripted.replaceAll(matrix_encriptado[i][0],matrix_encriptado[i][1]);
        }
        console.log(strEncripted);
    }

    if(strEncripted==""){
        document.getElementById("resultado-none").style.display="inline-block";
        document.getElementById("resultado-encriptado").style.display="none";
    }
    else{
        document.getElementById("resultado-none").style.display="none";
        document.getElementById("resultado-encriptado").style.display="inline-block";
    }
    return strEncripted;
}

function btnDesencriptar(){
    var texto_entrada = document.getElementById("mensaje-id");
    var texto_salida = document.getElementById("mensaje-encriptado-id");
    var strEncripted = desencriptar(texto_entrada.value);
    texto_salida.innerText = strEncripted;
    texto_entrada.value="";
}

function desencriptar(strEncripted){
    let matrix_desencriptado = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    strEncripted = strEncripted.toLowerCase();

    for(let i=0;i<matrix_desencriptado.length;i++){
        if(strEncripted.includes(matrix_desencriptado[i][1])){
            strEncripted = strEncripted.replaceAll(matrix_desencriptado[i][1],matrix_desencriptado[i][0]);
        }
        console.log(strEncripted);
    }

    if(strEncripted==""){
        document.getElementById("resultado-none").style.display="inline-block";
        document.getElementById("resultado-encriptado").style.display="none";
    }
    else{
        document.getElementById("resultado-none").style.display="none";
        document.getElementById("resultado-encriptado").style.display="inline-block";
    }
    return strEncripted;
}

function copiar(){
    var texto_salida = document.getElementById("mensaje-encriptado-id");
    texto_salida.select();
    navigator.clipboard.writeText(texto_salida.value);
    texto_salida.innerText="";
    alert("Texto Copiado");
    document.getElementById("resultado-none").style.display="inline-block";
    document.getElementById("resultado-encriptado").style.display="none";
}

function btnCopiar(){
    copiar();
}