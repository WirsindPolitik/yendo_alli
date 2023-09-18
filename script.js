document.addEventListener("DOMContentLoaded", function() {
    const botao = document.querySelector(".glow-on-hover");
    const imagem = document.getElementById("imagem");
    const audio = document.getElementById("audio"); // Adicione esta linha para obter o elemento de áudio
  
    botao.addEventListener("click", function() {
        imagem.style.display = "block"; // Mostra a imagem
        fadeIn(imagem); // Aplica o efeito de fade-in na imagem
        playAudio(); // Chama a função para tocar o áudio
    });
  
    // Função para aplicar o efeito de fade-in
    function fadeIn(element) {
        var opacity = 0;
        var interval = setInterval(function() {
            if (opacity < 1) {
                opacity += 0.02; // Ajuste o valor para uma transição mais suave
                element.style.opacity = opacity.toFixed(2); // Limita a 2 casas decimais
            } else {
                clearInterval(interval);
            }
        }, 10); // Intervalo de atualização (ajuste conforme necessário)
    }
  
    // Função para tocar o áudio
    function playAudio() {
        audio.play();
    }
  });