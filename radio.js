document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("music");
    const songTitle = document.querySelector(".song-title");
    const artist = document.querySelector(".artist");
    const playButton = document.getElementById("play-button");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    const songs = [
        { title: "Song 1", artist: "Artist 1", file: "music1.mp3" },
        { title: "Song 2", artist: "Artist 2", file: "music2.mp3" },
        { title: "Song 3", artist: "Artist 3", file: "music3.mp3" },
    ];

    let currentSongIndex = 0;

    function loadSong(songIndex) {
        const song = songs[songIndex];
        songTitle.textContent = song.title;
        artist.textContent = song.artist;
        music.src = song.file;
    }

    function playPause() {
        if (music.paused) {
            music.play();
            playButton.innerHTML = '<img src="pause-icon.png" alt="Pause">';
        } else {
            music.pause();
            playButton.innerHTML = '<img src="play-icon.png" alt="Play">';
        }
    }

    function playNext() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        music.play();
        playButton.innerHTML = '<img src="pause-icon.png" alt="Pause">';
    }

    function playPrev() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        music.play();
        playButton.innerHTML = '<img src="pause-icon.png" alt="Pause">';
    }

    loadSong(currentSongIndex);

    playButton.addEventListener("click", playPause);
    nextButton.addEventListener("click", playNext);
    prevButton.addEventListener("click", playPrev);
});

