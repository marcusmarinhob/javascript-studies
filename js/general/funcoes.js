function soma(n1, n2){
    return n1 + n2;
}

function setReplace( frase, nome, novo_nome ){
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    var validar;

    if (idade >= 18 ){
        validar = "Maior de idade";
    } else {
        validar = "Menor de idade";
    }

    return validar;
}

alert( soma(1,2) );
alert( setReplace("Vai Japão", "Japão", "Brasil"));
alert( validaIdade(prompt("Qual é a sua idade?")))