// Obtém os elementos com a classe "advice-number" e "advice-text"
// e armazena esses elementos nas variáveis adviceNumber e adviceText
const adviceNumber = document.getElementsByClassName("advice-number");
const adviceText = document.getElementsByClassName("advice-text");

// Adiciona um evento de clique ao botão com o id 'dice-btn'
document.getElementById('dice-btn').addEventListener('click', function() {
  // Define a URL da API que fornece conselhos
  const url = 'https://api.adviceslip.com/advice';
  
  // Faz uma solicitação de rede para a URL da API
  fetch(url)
    .then(response => {
      // Verifica se a resposta da API foi bem-sucedida
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      // Converte a resposta em JSON
      return response.json();
    })
    .then(data => {
      // Verifica se a resposta contém a estrutura esperada
      if (data.slip && data.slip.id && data.slip.advice) {
        // Atualiza o conteúdo dos elementos com o número e o texto do conselho
        adviceNumber[0].textContent = `ADVICE #${data.slip.id}`;
        adviceText[0].textContent = data.slip.advice;
      } else {
        // Exibe um erro no console se a resposta da API for inválida
        console.error('Invalid API response');
      }
    })
    .catch(error => {
      // Exibe um erro no console se houver um problema na solicitação de rede
      console.error('Error fetching advice:', error);
    });
});
