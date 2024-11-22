/* para solicitar entradas do usuario usando o comando prompt no ambiente NODE, é necessário:
1° instalar a biblioteca com o comando "npm install prompt-sync"
2º criar um objeto prompt no seu codigo com o comando "var prompt = require("prompt-sync")()"
3º utilize normalmente, exemplo: "var nome - prompt("digite seu nome")" */

//importando a biblioteca prompt
let prompt = require("prompt-sync")();


//1º passo: coletar infos do usuario
let nome = prompt("Digite seu nome:");
let horario = prompt("É manhã, tarde, noite ou madrugada?").toLowerCase();;


console.log(nome,horario);

//2º passo: use o if e imprima "Bom dia, <nome>" ou "Boa tarde, <nome>"

if (horario === "manha") {
    console.log ("Bom dia,", nome + ".")
}

else if (horario === "tarde") {
    console.log ("Boa tarde,", nome + ".")
} 

else if (horario === "noite")  {
    console.log ("Boa noite,", nome + ".")
}

else if (horario === "madrugada")  {
    console.log ("Boa madrugada,", nome + ".")
}

else {
    console.log('Opção inválida! Por favor, digite "manha", "tarde", "noite", "madrugada".');
}

/* melhore o programa incluindo o boa noite, e imprimindo opção inválida
caso o usuario não digite exatamente "manha", "tarde" ou "noite" */

