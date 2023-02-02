let musics = [{
        name: "Venha ao altar  ",
        artist: "DROPS",
        src: "musicas/Venha ao altar (Come to the altar) • DROPS(MP3_160K).mp3",
        img: "image/image1.jpg",
    },
    {
        name: "A Casa é Sua",
        artist: "Julliany Souza e Léo Brandão",
        src: "musicas/A Casa É Sua - Julliany Souza e Léo Brandão _ LETRA(MP3_70K).mp3",
        img: "image/image2.jpg",
    },
    {
        name: "Cordeiro e Leão",
        artist: "Central 3",
        src: "musicas/Cordeiro e Leão (Ao Vivo)(MP3_160K).mp3",
        img: "image/image3.jpg",
    },
    {
        name: "Até Te Encontrar",
        artist: "BE ONE MUSIC",
        src: "musicas/BE ONE MUSIC _  Até Te Encontrar (Live)(MP3_70K).mp3",
        img: "image/image4.jpg",
    },
    {
        name: "Esplendido Amor",
        artist: "BE ONE MUSIC",
        src: "musicas/Be One Music - Esplêndido Amor [Lyric Vídeo](MP3_160K).mp3",
        img: "image/image5.jpg",
    },
];

let music = document.querySelector("audio");
let indexMusic = 0;
let timeMusic = document.querySelector(".end");
let image = document.querySelector("img");
let nameMusic = document.querySelector("h2");
let nameArtist = document.querySelector("i");

document.querySelector(".fa-play-circle").addEventListener("click", playmusic);
document
    .querySelector(".fa-pause-circle")
    .addEventListener("click", pausemusic);
document.querySelector(".fa-arrow-circle-left").addEventListener("click", () => {
    indexMusic--;

    if (indexMusic < 0) {
        indexMusic = 4;
    }
    renderMusic(indexMusic);
});

document
    .querySelector(".fa-arrow-circle-right")
    .addEventListener("click", () => {
        indexMusic++;
        if (indexMusic > 4) {
            indexMusic = 0;
        }
        renderMusic(indexMusic);
    });

music.addEventListener("timeupdate", timer);

function renderMusic(index) {
    music.setAttribute("src", musics[index].src);
    music.addEventListener("loadeddata", () => {
        nameMusic.textContent = musics[index].name;
        nameArtist.textContent = musics[index].artist;
        image.src = musics[index].img;
        timeMusic.textContent = timeFormat(Math.floor(music.duration));
    });
}

function playmusic() {
    music.play();
    document.querySelector(".fa-pause-circle").style.display = "block";
    document.querySelector(".fa-play-circle").style.display = "none";
}

function pausemusic() {
    music.pause();
    document.querySelector(".fa-pause-circle").style.display = "none";
    document.querySelector(".fa-play-circle").style.display = "block";
}

function timer() {
    let time = document.querySelector("progress");
    time.style.width =
        Math.floor((music.currentTime / music.duration) * 100) + "%";
    let timeStart = document.querySelector(".start");
    timeStart.textContent = timeFormat(Math.floor(music.currentTime));
}

function timeFormat(seconds) {
    let timeMinutes = Math.floor(seconds / 60);
    let timeSeconds = seconds % 60;

    if (timeSeconds < 10) {
        timeSeconds = "0" + timeSeconds;
    }
    return timeMinutes + ":" + timeSeconds;
}