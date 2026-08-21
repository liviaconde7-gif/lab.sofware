// Exercícios 6 - Operações

// Um produto custa R$120.

// Crie uma variável desconto igual a 20%.

// A pessoa possui somente R$30, após a operação verifique se a pessoa possui dinheiro suficeinte

// Mostre o preço final juntamente com a possibilidae da pessoa poder ou não comprar o produto.

let desconto = 0.2
let produto = 120
let ValorFinal = produto - (produto*desconto)

let carteira = 30
if (carteira < ValorFinal) {
    console.log(`nao pode comprar`);
} 
else{
    console.log(`pode comprar, valor = ${ValorFinal}`);
}