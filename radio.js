javascript
// Obtenha o elemento de áudio pelo seu ID
var playlist = document.getElementById("audioPlayer");

// Adicione um evento "ended" ao elemento de áudio
playlist.addEventListener("ended", function() {
    // Quando a música atual terminar, carregue a próxima música
    loadNextSong();
});

// Função para carregar a próxima música
function loadNextSong() {
    // Aqui você pode adicionar a lógica para determinar qual é a próxima música a ser tocada
    // Por exemplo, você pode ter uma lista de músicas e simplesmente carregar a próxima música na lista
    var nextSong = "musica2.mp3";
    var nextSong = "musica2.mp3";
    var nextSong = "musica2.mp3";
    var nextSong = "musica2.mp3";
    var nextSong = "musica2.mp3";
    var nextSong = "musica2.mp3";
    var nextSong = "musica2.mp3";
    var nextSong = "musica2.mp3";
    var nextSong = "musica2.mp3";

    // Carregue a próxima música no elemento de áudio
    playlist.src = nextSong;

    // Inicie a reprodução da próxima música
    playlist.play();
}
