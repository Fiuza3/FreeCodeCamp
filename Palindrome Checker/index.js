// index.js - Aonde a logica acontece!

// Pegando os elementos do HTML pelo RG... digo, pelo ID!
const campoTexto = document.getElementById('text-input'); // Onde o usuário digita sua obra-prima
const botaoVerificar = document.getElementById('check-btn'); // O botão mágico
const resultado = document.getElementById('result'); // O veredito do juiz palindrômico

// Função que faz a mágica de verdade!
function verificarSeEhPalindromo(textoOriginal) {
    // Remove tudo que não é letra ou número (adeus, pontuação e espaços!)
    const textoLimpo = textoOriginal.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Inverte o texto limpinho
    const textoInvertido = textoLimpo.split('').reverse().join('');
    // Se o texto limpinho for igual ao invertido, temos um palíndromo!
    return textoLimpo === textoInvertido;
}

// Função que lida com o clique do botão
botaoVerificar.addEventListener('click', function() {
    const textoDigitado = campoTexto.value;
    // Se o usuário não digitou nada, manda ele digitar!
    if (!textoDigitado) {
        alert('Please input a value.');
        return;
    }
    // Chama o detetive de palíndromos
    const ehPalindromo = verificarSeEhPalindromo(textoDigitado);
    // O resultado deve ser exatamente igual ao texto digitado, seguido de 'is a palindrome.' ou 'is not a palindrome.'
    if (ehPalindromo) {
        resultado.textContent = `${textoDigitado} is a palindrome.`;
    } else {
        resultado.textContent = `${textoDigitado} is not a palindrome.`;
    }
});

// Dica: Você pode apertar Enter para verificar também, porque somos legais assim!
campoTexto.addEventListener('keydown', function(evento) {
    if (evento.key === 'Enter') {
        botaoVerificar.click();
    }
});

// Fim do script! Se chegou até aqui, parabéns: você já sabe o que é um palíndromo e como caçar um!
