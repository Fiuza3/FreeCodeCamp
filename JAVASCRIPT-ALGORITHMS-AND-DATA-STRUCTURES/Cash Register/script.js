// script.js - O caixa mais engraçado do bairro!

// Variáveis fornecidas pelo desafio (pode mudar para testar)
let price = 19.5;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

// Pegando os elementos do HTML
const campoCash = document.getElementById('cash');
const botaoCompra = document.getElementById('purchase-btn');
const resultado = document.getElementById('change-due');

// Tabela de valores das notas e moedas
const valoresMoedas = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

// Função para calcular o troco
function calcularTroco(preco, dinheiro, caixa) {
  let troco = +(dinheiro - preco).toFixed(2);
  let totalCaixa = +(caixa.reduce((acc, curr) => acc + curr[1], 0)).toFixed(2);
  let trocoArray = [];
  let caixaCopia = JSON.parse(JSON.stringify(caixa)).reverse();

  if (dinheiro < preco) {
    return {status: 'ALERTA', mensagem: 'Customer does not have enough money to purchase the item'};
  }
  if (troco === 0) {
    return {status: 'EXATO', mensagem: 'No change due - customer paid with exact cash'};
  }
  if (troco > totalCaixa) {
    return {status: 'INSUFFICIENT_FUNDS'};
  }

  for (let [moeda, quantia] of caixaCopia) {
    let valorMoeda = valoresMoedas[moeda];
    let valorUsado = 0;
    while (troco >= valorMoeda && quantia > 0) {
      troco = +(troco - valorMoeda).toFixed(2);
      quantia = +(quantia - valorMoeda).toFixed(2);
      valorUsado = +(valorUsado + valorMoeda).toFixed(2);
    }
    if (valorUsado > 0) {
      trocoArray.push([moeda, valorUsado]);
    }
  }

  if (troco > 0) {
    return {status: 'INSUFFICIENT_FUNDS'};
  }
  let trocoTotal = +(trocoArray.reduce((acc, curr) => acc + curr[1], 0)).toFixed(2);
  if (trocoTotal === totalCaixa) {
    return {status: 'CLOSED', troco: trocoArray};
  }
  return {status: 'OPEN', troco: trocoArray};
}

// Função que lida com o clique do botão de compra
botaoCompra.addEventListener('click', function() {
  let cash = Number(campoCash.value);
  let resultadoTroco = calcularTroco(price, cash, cid);
  if (resultadoTroco.status === 'ALERTA') {
    alert(resultadoTroco.mensagem);
    return;
  }
  if (resultadoTroco.status === 'EXATO') {
    resultado.textContent = resultadoTroco.mensagem;
    return;
  }
  if (resultadoTroco.status === 'INSUFFICIENT_FUNDS') {
    resultado.textContent = 'Status: INSUFFICIENT_FUNDS';
    return;
  }
  if (resultadoTroco.status === 'CLOSED') {
    let texto = 'Status: CLOSED';
    resultadoTroco.troco.forEach(([moeda, valor]) => {
      texto += ` ${moeda}: $${valor}`;
    });
    resultado.textContent = texto;
    return;
  }
  if (resultadoTroco.status === 'OPEN') {
    let texto = 'Status: OPEN';
    resultadoTroco.troco.forEach(([moeda, valor]) => {
      texto += ` ${moeda}: $${valor}`;
    });
    resultado.textContent = texto;
    return;
  }
});

// Dica: Você pode apertar Enter para finalizar a compra também!
campoCash.addEventListener('keydown', function(evento) {
  if (evento.key === 'Enter') {
    botaoCompra.click();
  }
});

// Fim do script! Se chegou até aqui, parabéns: você já pode ser caixa de padaria! 💸
