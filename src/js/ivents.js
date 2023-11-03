import { buttonPlay, buttonBack, buttonNext, volumeBar, volume, } from "./declaration.js";
import { songs, wavesurfer, playStop, setSong } from "./index.js";

export let isPlaying = false;
export let songIndex = 0;

buttonPlay.addEventListener("click", () => {
    isPlaying = !isPlaying;
    playStop();
});

document.body.addEventListener("keyup", (event) => {
    if (event.key == " " || event.code == "Space") {
        isPlaying = !isPlaying;
        playStop();
    }
});

buttonBack.addEventListener("click", () => {
    if (songIndex > 0) {
        songIndex--;
        setSong();
    } else return;
});

buttonNext.addEventListener("click", () => {
    if (songIndex < songs.length - 1) {
        songIndex++;
        setSong();
    } else return;
});

volumeBar.addEventListener("click", (e) => {
    const width = volumeBar.clientWidth;
    const clickCoorX = e.offsetX;
    const currentVol = (clickCoorX / width).toFixed(2);
    wavesurfer.setVolume(currentVol);
    const precentVolume = (clickCoorX / width * 100).toFixed();
    volume.style.width = `${precentVolume}%`;
});
