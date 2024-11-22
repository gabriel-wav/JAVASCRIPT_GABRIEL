// Importando a biblioteca prompt
let prompt = require("prompt-sync")();

// 1º passo: Coletar informações do usuário
let nome = prompt("Digite seu nome: ");
let horario = prompt("É manhã, tarde, noite ou madrugada? ").toLowerCase();  // Usando toLowerCase para evitar problemas com maiúsculas/minúsculas

console.log(nome, horario);

// 2º passo: Usar o operador "ou" (||) para verificar as condições de saudação
if (horario === "manha" || horario === "tarde" || horario === "noite" || horario === "madrugada") {

    if (horario === "manha") {
        console.log(`Bom dia, ${nome}.`);
    } else if (horario === "tarde") {
        console.log(`Boa tarde, ${nome}.`);
    } else if (horario === "noite") {
        console.log(`Boa noite, ${nome}.`);
    } else if (horario === "madrugada") {
        console.log(`Boa madrugada, ${nome}.`);
    }

} else {
    console.log('Opção inválida! Por favor, digite "manha", "tarde", "noite" ou "madrugada".');
}
