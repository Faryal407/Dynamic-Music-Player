// song 1
let audio1 = document.getElementById("audio1");
let playBtn1 = document.getElementById("play1");
let pauseBtn1 = document.getElementById("pause1");
let time1 = document.getElementById("time1");
let progress1 = document.getElementById("progress1");

playBtn1.onclick = () => audio1.play();
pauseBtn1.onclick = () => audio1.pause();

audio1.ontimeupdate = () => {
    progress1.value = (audio1.currentTime / audio1.duration) * 100;

    let minutes1 = Math.floor(audio1.currentTime / 60);
    let seconds1 =  Math.floor(audio1.currentTime % 60);

    time1.textContent = `${minutes1}:${seconds1.toString().padStart(2, '0')}`;
};
progress1.oninput = () => {
    audio1.currentTime = (progress1.value / 100) * audio1.duration;
}

// song 2
let audio2 = document.getElementById("audio2");
let playBtn2 = document.getElementById("play2");
let pauseBtn2 = document.getElementById("pause2");
let time2 = document.getElementById("time2");
let progress2 = document.getElementById("progress2");

playBtn2.onclick = () => audio2.play();
pauseBtn2.onclick = () => audio2.pause();

audio2.ontimeupdate = () => {
    progress2.value = (audio2.currentTime / audio2.duration) * 100;

    let minutes2 = Math.floor(audio2.currentTime / 60);
    let seconds2 =  Math.floor(audio2.currentTime % 60);

    time2.textContent = `${minutes2}:${seconds2.toString().padStart(2, '0')}`;
};
progress2.oninput = () => {
    audio2.currentTime = (progress2.value / 100) * audio2.duration;
}

// song 3
let audio3 = document.getElementById("audio3");
let playBtn3 = document.getElementById("play3");
let pauseBtn3 = document.getElementById("pause3");
let time3 = document.getElementById("time3");
let progress3 = document.getElementById("progress3");

playBtn3.onclick = () => audio3.play();
pauseBtn3.onclick = () => audio3.pause();

audio3.ontimeupdate = () => {
    progress3.value = (audio3.currentTime / audio3.duration) * 100;

    let minutes3 = Math.floor(audio3.currentTime / 60);
    let seconds3 =  Math.floor(audio3.currentTime % 60);

    time3.textContent = `${minutes3}:${seconds3.toString().padStart(2, '0')}`;
};
progress3.oninput = () => {
    audio3.currentTime = (progress3.value / 100) * audio3.duration;
}

// song 4
let audio4 = document.getElementById("audio4");
let playBtn4 = document.getElementById("play4");
let pauseBtn4 = document.getElementById("pause4");
let time4 = document.getElementById("time4");
let progress4 = document.getElementById("progress4");

playBtn4.onclick = () => audio4.play();
pauseBtn4.onclick = () => audio4.pause();

audio4.ontimeupdate = () => {
    progress4.value = (audio4.currentTime / audio4.duration) * 100;

    let minutes4 = Math.floor(audio4.currentTime / 60);
    let seconds4 =  Math.floor(audio4.currentTime % 60);

    time4.textContent = `${minutes4}:${seconds4.toString().padStart(2, '0')}`;
};
progress4.oninput = () => {
    audio4.currentTime = (progress4.value / 100) * audio4.duration;
}

// song 5
let audio5 = document.getElementById("audio5");
let playBtn5 = document.getElementById("play5");
let pauseBtn5 = document.getElementById("pause5");
let time5 = document.getElementById("time5");
let progress5 = document.getElementById("progress5");

playBtn5.onclick = () => audio5.play();
pauseBtn5.onclick = () => audio5.pause();

audio5.ontimeupdate = () => {
    progress5.value = (audio5.currentTime / audio5.duration) * 100;

    let minutes5 = Math.floor(audio5.currentTime / 60);
    let seconds5 =  Math.floor(audio5.currentTime % 60);

    time5.textContent = `${minutes5}:${seconds5.toString().padStart(2, '0')}`;
};
progress5.oninput = () => {
    audio5.currentTime = (progress5.value / 100) * audio5.duration;
}

// song 6
let audio6 = document.getElementById("audio6");
let playBtn6 = document.getElementById("play6");
let pauseBtn6 = document.getElementById("pause6");
let time6 = document.getElementById("time6");
let progress6 = document.getElementById("progress6");

playBtn6.onclick = () => audio6.play();
pauseBtn6.onclick = () => audio6.pause();

audio6.ontimeupdate = () => {
    progress6.value = (audio6.currentTime / audio6.duration) * 100;

    let minutes6 = Math.floor(audio6.currentTime / 60);
    let seconds6 =  Math.floor(audio6.currentTime % 60);

    time6.textContent = `${minutes6}:${seconds6.toString().padStart(2, '0')}`;
};
progress6.oninput = () => {
    audio6.currentTime = (progress6.value / 100) * audio6.duration;
}

// song 7
let audio7 = document.getElementById("audio7");
let playBtn7 = document.getElementById("play7");
let pauseBtn7 = document.getElementById("pause7");
let time7 = document.getElementById("time7");
let progress7 = document.getElementById("progress7");

playBtn7.onclick = () => audio7.play();
pauseBtn7.onclick = () => audio7.pause();

audio7.ontimeupdate = () => {
    progress7.value = (audio7.currentTime / audio7.duration) * 100;

    let minutes7 = Math.floor(audio7.currentTime / 60);
    let seconds7 =  Math.floor(audio7.currentTime % 60);

    time7.textContent = `${minutes7}:${seconds7.toString().padStart(2, '0')}`;
};
progress7.oninput = () => {
    audio7.currentTime = (progress7.value / 100) * audio7.duration;
}

// song 8
let audio8 = document.getElementById("audio8");
let playBtn8 = document.getElementById("play8");
let pauseBtn8 = document.getElementById("pause8");
let time8 = document.getElementById("time8");
let progress8 = document.getElementById("progress8");

playBtn8.onclick = () => audio8.play();
pauseBtn8.onclick = () => audio8.pause();

audio8.ontimeupdate = () => {
    progress8.value = (audio8.currentTime / audio8.duration) * 100;

    let minutes8 = Math.floor(audio8.currentTime / 60);
    let seconds8 =  Math.floor(audio8.currentTime % 60);

    time8.textContent = `${minutes8}:${seconds8.toString().padStart(2, '0')}`;
};
progress8.oninput = () => {
    audio8.currentTime = (progress8.value / 100) * audio8.duration;
}