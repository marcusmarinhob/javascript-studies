// var nome = "Marcus";
// var idade = 29;
// var msgPopup = "Bem vindo, " + nome + "!!!\n" + "Você tem " + idade + " anos...";

// alert(msgPopup);
// console.log(msgPopup);

// var lista = ["maçã", "pêra", "laranja"];
// console.log(lista);

// lista.push("limão");
// console.log(lista);

// lista.pop();
// console.log(lista);

// var fruta = {nome:"maça", cor: "verde"};
// console.log(fruta.nome);
// console.log(fruta.cor);

// var idade = prompt("Qual é a sua idade?");
// if(idade >= 18){
//     alert("Maior de idade!");
// } else {
//     alert("Menor de idade");
// }

// var count = 0;

// while (count < 5){
//     console.log(count);
//     count = count + 1;
// }

// for( var count = 0; count < 10; count++){
//     console.log(count);
// }

// var d = new Date();

// dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
// meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

// console.log(d);
// console.log(dias[d.getDay()]);
// console.log(d.getDate() + " de " + meses[d.getMonth()] + " de " + d.getFullYear() )

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