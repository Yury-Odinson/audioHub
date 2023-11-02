import { changePlayButton } from "./UI.js";
import { buttonBack, buttonNext, buttonPlay, songName, faveForm, volumeBar, volume } from "./declaration.js";

import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'

const songs = ["2015-1 - Fraytime", "2016-4 - Empty Hollow", "2018-3 - Darkness", "2020-1 - Nostalgia", "vodokanal-minus"];

let songIndex = 0;
songName.innerHTML = songs[songIndex]

export let isPlaying = false

buttonPlay.addEventListener("click", () => {
    isPlaying = !isPlaying;
    changePlayButton();
});

buttonBack.addEventListener("click", () => {
    if (songIndex > 0) {
        songIndex--;
        setSong();
    } else return;
})

buttonNext.addEventListener("click", () => {
    if (songIndex < songs.length - 1) {
        songIndex++;
        setSong();
    } else return;
})

function setSong() {
    songName.innerHTML = songs[songIndex];
    wavesurfer.load(`/audio/${songName.innerHTML}.mp3`);
}

export const wavesurfer = WaveSurfer.create({
    container: faveForm,
    waveColor: '#808080',
    progressColor: '#ffa31a',
    url: `/audio/${songName.innerHTML}.mp3`,
});

volumeBar.addEventListener("click", (e) => {
    const width = volumeBar.clientWidth;
    const clickCoorX = e.offsetX;
    const currentVol = (clickCoorX / width).toFixed(2);
    wavesurfer.setVolume(currentVol);
    const precentVolume = (clickCoorX / width * 100).toFixed();
    volume.style.width = `${precentVolume}%`;
});
