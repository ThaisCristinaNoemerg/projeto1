document.addEventListener("DOMContentLoaded", function () {
    // Obtém todos os elementos de áudio da lista de reprodução
    var audioElements = document.querySelectorAll("audio");

    // Inicializa a reprodução da primeira música
    var currentIndex = 0;
    audioElements[currentIndex].play();

    // Função para tocar a próxima música
    function playNext() {
        // Pára o áudio atual
        audioElements[currentIndex].pause();
        // Move para a próxima música
        currentIndex++;
        // Verifica se ainda há músicas na lista
        if (currentIndex < audioElements.length) {
            // Toca a próxima música
            audioElements[currentIndex].play();
        }
    }

    // Adiciona um evento de término para cada elemento de áudio
    audioElements.forEach(function (audio) {
        audio.addEventListener("ended", function () {
            // Quando uma música termina, toca a próxima
            playNext();
        });
    });
});
