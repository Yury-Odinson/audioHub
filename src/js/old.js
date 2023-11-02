// import { changePlayButton } from "./UI.js";
// import { buttonBack, buttonNext, buttonPlay, songName, audio, progressStart, progressEnd, progressBar, progress, volumeBar, volume, faveForm } from "./declaration.js";

// import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'

// const songs = ["2015-1 - Fraytime", "2016-4 - Empty Hollow", "2018-3 - Darkness", "2020-1 - Nostalgia", "vodokanal-minus"];

// let songIndex = 0;
// songName.innerHTML = songs[songIndex]

// export let isPlaying = false

// function loadSOng(name) {
//     return songName.innerHTML = name;
//     // audio.src = `/audio/${name}.mp3`;
// }

// buttonPlay.onclick = () => {
//     loadSOng(songs[songIndex]);
//     playSong();
// }

// buttonBack.onclick = () => {
//     if (songIndex > 0) {
//         songIndex--;
//         loadSOng(songs[songIndex]);
//         isPlaying = true;
//         playSong();
//     } else return;
// }

// buttonNext.onclick = () => {
//     if (songIndex < songs.length - 1) {
//         songIndex++;
//         loadSOng(songs[songIndex]);
//         isPlaying = true;
//         playSong();
//     } else return;
// }

// function playSong() {
//     isPlaying = !isPlaying;
//     changePlayButton();
//     if (isPlaying) {
//         // audio.play();
//         wavesurfer.play();
//     } else {
//         // audio.pause();
//         wavesurfer.pause();
//     }
// }

// function getProgress(event) {
//     const { duration, currentTime } = event.srcElement;
//     progressStart.innerHTML = (currentTime / 60).toFixed(2);
//     progressEnd.innerHTML = (duration / 60).toFixed(2);
//     const precentDuration = (currentTime / duration) * 100;     // find precent duration audio file
//     progress.style.width = `${precentDuration}%`;
// }

// audio.addEventListener("timeupdate", getProgress);

// function setProgress(event) {
//     if (audio.src !== "") {
//         const width = this.clientWidth;     // clientWidth - width of the prograss bar
//         const clickCoorX = event.offsetX;   // find coordinate X for the progress bar
//         const duration = audio.duration;    // set duration audio
//         audio.currentTime = (clickCoorX / width) * duration;    // set audio current time
//     } else return

// }

// progressBar.addEventListener("click", setProgress);

// function setVolume(event) {
//     const width = this.clientWidth;
//     const clickCoorX = event.offsetX;
//     audio.volume = (clickCoorX / width);
//     const precentVolume = (clickCoorX / width) * 100;
//     volume.style.width = `${precentVolume}%`;
// }

// volumeBar.addEventListener("click", setVolume);


// const wavesurfer = WaveSurfer.create({
//     container: faveForm,
//     waveColor: '#808080',
//     progressColor: '#ffa31a',
//     url: `/audio/${songName.innerHTML}.mp3`,
// })

// wavesurfer.on('click', () => {
//     wavesurfer.play()
// })

