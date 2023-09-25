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
    var nextSong = "Musicas/1MILLION X KDA - MORE.mp3";
    var nextSong = "Musicas/ENHYPEN (엔하이픈) Bite Me Official MV.mp3";
    var nextSong = "Musicas/LE SSERAFIM (르세라핌) UNFORGIVEN (feat. Nile Rodgers) OFFICIAL MV.mp3";
    var nextSong = "Musicas/Little Mix - Power (Official Video) ft. Stormzy.mp3";
    var nextSong = "Musicas/Little Mix - Secret Love Song (Official Video) ft. Jason Derulo.mp3";
    var nextSong = "Musicas/[BLACKSWAN] Karma Official MV.mp3";
    var nextSong = "Musicas/TXT (투모로우바이투게더), Anitta Back for More Official MV.mp3";
    var nextSong = "Musicas/SEVENTEEN (세븐틴) 손오공 Official MV.mp3";
    var nextSong = "Musicas/TREASURE - BONA BONA MV.mp3";

    // isso é para a próxima música no elemento de áudio
    playlist.src = nextSong;

    // Inicie a reprodução da próxima música
    playlist.play();
}
