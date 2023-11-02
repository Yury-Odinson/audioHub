import { buttonPlay } from "./declaration.js";
import { isPlaying } from "./index.js";

// change image for button play/pause
export function changePlayButton() {
    if (isPlaying) {
        buttonPlay.style.backgroundImage = "url('image/icons8-pause.png')";
    } else {
        buttonPlay.style.backgroundImage = "url('image/icons8-play.png')";
    }
}
