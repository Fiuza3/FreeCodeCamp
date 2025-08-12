// script.js - O atendente virtual do validador de telefones!

// Pegando os elementos do HTML pelo ID (sem precisar de operadora)
const campoTelefone = document.getElementById('user-input'); // Onde o usuário digita o número
const botaoVerificar = document.getElementById('check-btn'); // Botão de verificação
const botaoLimpar = document.getElementById('clear-btn'); // Botão de limpar
const resultado = document.getElementById('results-div'); // Onde aparece o resultado

// Função que valida o número de telefone dos EUA
function validarTelefoneEUA(numero) {
  // Regex poderoso, digno de call center americano!
  // Aceita formatos válidos e rejeita os inválidos conforme o desafio
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  // Checa se o número começa com country code válido (se houver)
  if (/^1/.test(numero)) {
    // Se começa com 1, tem que ser só 1, não 11, 10, 2, etc
    if (!/^1(\s|\(|\d)/.test(numero)) return false;
    // Não pode ter mais de um dígito antes do parêntese/área
    if (/^1\d/.test(numero)) return false;
  }
  // Não pode ter letras ou símbolos malucos
  if (/[^\d\s\-\(\)]/.test(numero.replace(/^1\s?/, ''))) return false;
  // Testa o regex principal
  return regex.test(numero);
}

// Função que lida com o clique do botão de verificação
botaoVerificar.addEventListener('click', function() {
  const valorDigitado = campoTelefone.value;
  if (!valorDigitado) {
    alert('Please provide a phone number');
    return;
  }
  if (validarTelefoneEUA(valorDigitado)) {
    resultado.textContent = `Valid US number: ${valorDigitado}`;
  } else {
    resultado.textContent = `Invalid US number: ${valorDigitado}`;
  }
});

// Função que lida com o clique do botão de limpar
botaoLimpar.addEventListener('click', function() {
  resultado.textContent = '';
});

// Dica: Você pode apertar Enter para verificar também!
campoTelefone.addEventListener('keydown', function(evento) {
  if (evento.key === 'Enter') {
    botaoVerificar.click();
  }
});

// Fim do script! Se chegou até aqui, parabéns: você já pode trabalhar no suporte! ☎️
