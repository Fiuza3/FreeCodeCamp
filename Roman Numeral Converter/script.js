// script.js - O imperador dos conversores!

// Pegando os elementos do HTML pelo ID (sem precisar de centurião)
const campoNumero = document.getElementById('number'); // Onde o plebeu digita o número
const botaoConverter = document.getElementById('convert-btn'); // O botão que faz a mágica
const resultado = document.getElementById('output'); // O veredito do Senado Romano

// Tabela de numerais romanos digna de Júlio César
const tabelaRomanos = [
  { valor: 1000, simbolo: 'M' },
  { valor: 900, simbolo: 'CM' },
  { valor: 500, simbolo: 'D' },
  { valor: 400, simbolo: 'CD' },
  { valor: 100, simbolo: 'C' },
  { valor: 90, simbolo: 'XC' },
  { valor: 50, simbolo: 'L' },
  { valor: 40, simbolo: 'XL' },
  { valor: 10, simbolo: 'X' },
  { valor: 9, simbolo: 'IX' },
  { valor: 5, simbolo: 'V' },
  { valor: 4, simbolo: 'IV' },
  { valor: 1, simbolo: 'I' }
];

// Função que converte número árabe para romano (sem precisar de toga)
function converterParaRomano(numero) {
  let resultadoRomano = '';
  let valorRestante = numero;
  // Percorre a tabela e vai pegando os maiores valores possíveis
  for (const item of tabelaRomanos) {
    while (valorRestante >= item.valor) {
      resultadoRomano += item.simbolo;
      valorRestante -= item.valor;
    }
  }
  return resultadoRomano;
}

// Função que lida com o clique do botão
botaoConverter.addEventListener('click', function() {
  const valorDigitado = campoNumero.value;
  // Se o usuário não digitou nada ou digitou algo não numérico
  if (valorDigitado === '' || isNaN(valorDigitado)) {
    resultado.textContent = 'Please enter a valid number';
    return;
  }
  const numero = Number(valorDigitado);
  // Se o número for menor que 1
  if (numero < 1) {
    resultado.textContent = 'Please enter a number greater than or equal to 1';
    return;
  }
  // Se o número for maior que 3999
  if (numero >= 4000) {
    resultado.textContent = 'Please enter a number less than or equal to 3999';
    return;
  }
  // Se chegou até aqui, pode converter!
  resultado.textContent = converterParaRomano(numero);
});

// Dica: Você pode apertar Enter para converter também, porque somos romanos modernos!
campoNumero.addEventListener('keydown', function(evento) {
  if (evento.key === 'Enter') {
    botaoConverter.click();
  }
});

// Fim do script! Ave, JavaScript! 🏛️
