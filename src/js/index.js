import { buttonPlay, songName, waveForm, progressStart, progressEnd, templateNode, setList } from "./declaration.js";
import { isPlaying } from "./ivents.js";
import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js';

// songs must contain song file names without formats in the /audio folder. expample:
// const songs = ["song 1", "song 2", ... , "song n"];
export const songs = ["2015-1 - Fraytime", "2016-4 - Empty Hollow", "2018-3 - Darkness", "2020-1 - Nostalgia_1", "2020-1 - Nostalgia_2", "svoboda - vodokanal minus_1", "svoboda - vodokanal minus_2", "svoboda - vodokanal minus_2", "svoboda - vodokanal minus_2"];

let currentSong = localStorage.getItem("currentSong") || songs[0];

songName.innerHTML = currentSong;

export const wavesurfer = WaveSurfer.create({
    container: waveForm,
    autoPlay: true,
    waveColor: '#808080',
    progressColor: '#ffa31a',
    url: `./audio/${songName.innerHTML}.mp3`,
});

// start/pause playing song & change image for button play/pause
export function playStop() {
    if (isPlaying) {
        wavesurfer.play();
        buttonPlay.style.backgroundImage = "url('image/icons8-pause.png')";
    } else {
        wavesurfer.pause();
        buttonPlay.style.backgroundImage = "url('image/icons8-play.png')";
    }
}

wavesurfer.on('finish', function () {
    let nextSong = songs.indexOf(currentSong) + 1;
    wavesurfer.load(`./audio/${songs[nextSong]}.mp3`);
});

export function setSong(name) {
    songName.innerHTML = name;
    wavesurfer.load(`/audio/${name}.mp3`);
    currentSong = name;
    localStorage.setItem("currentSong", name);
}

// Current time & duration
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemainder = Math.round(seconds) % 60;
    const paddedSeconds = `0${secondsRemainder}`.slice(-2);
    return `${minutes}:${paddedSeconds}`;
}

wavesurfer.on('decode', (duration) => (progressEnd.textContent = formatTime(duration)));
wavesurfer.on('timeupdate', (currentTime) => (progressStart.textContent = formatTime(currentTime)));

songs.map(element => {
    const template = document.importNode(templateNode.content, true);
    const song = template.querySelector(".setList__item");
    song.textContent = element;
    setList.append(song);
    if (song.innerHTML === currentSong) {
        song.classList.add("setList__itemActive");
    }
    song.addEventListener("click", (e) => {
        setSong(e.target.innerHTML);
        if (e.target.innerHTML == currentSong) {
            setStyle();
            e.target.classList.add("setList__itemActive");
        }
    });
});

// reset style inactive song in the playList
function setStyle() {
    const li = document.querySelectorAll(".setList__item");
    li.forEach(element => element.classList.remove("setList__itemActive"));
};
