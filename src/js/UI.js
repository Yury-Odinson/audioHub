import { buttonPlay } from "./declaration.js";
import { isPlaying, wavesurfer } from "./index.js";

// change image for button play/pause
export function changePlayButton() {
    if (isPlaying) {
        wavesurfer.play();
        buttonPlay.style.backgroundImage = "url('image/icons8-pause.png')";
    } else {
        wavesurfer.pause();
        buttonPlay.style.backgroundImage = "url('image/icons8-play.png')";
    }
}




