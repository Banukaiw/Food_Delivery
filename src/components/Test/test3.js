const music = new Audio('Shaheena.mp3');
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let back = document.getElementById('back');
let next = document.getElementById('next');

const songs = [
    { id: 1, songName: "Aye Enna Pana Mage", poster: "images/1.jpg" },
    { id: 2, songName: "Channa Kinnaravi", poster: "images/2.jpg" },
    { id: 3, songName: "Sudu Pata Mal Watuna", poster: "images/3.jpg" },
    // Add all other songs similarly
];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        wave.classList.remove('active2');
    }
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    });
};

const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.style.background = "rgb(105, 105, 170, 0)";
    });
};

Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        playSong(index);
    });
});

const playSong = (index) => {
    makeAllPlays();
    document.getElementById(index).classList.remove('fa-circle-play');
    document.getElementById(index).classList.add('fa-circle-pause');
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => ele.id == index);
    song_title.forEach(ele => {
        title.innerHTML = ele.songName;
    });
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    wave.classList.add('active2');
    music.addEventListener('ended', () => {
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        wave.classList.remove('active2');
    });
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 170, .1)";
};

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

music.addEventListener('ended', () => {
    masterPlay.classList.add('fa-play');
    masterPlay.classList.remove('fa-pause');
    wave.classList.remove('active2');
});

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-mute');
        vol_icon.classList.remove('fa-volume-up');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('fa-volume-low');
        vol_icon.classList.remove('fa-volume-mute');
        vol_icon.classList.remove('fa-volume-up');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-mute');
        vol_icon.classList.add('fa-volume-up');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = songs.length;
    }
    playSong(index);
});

next.addEventListener('click', () => {
    index += 1;
    if (index > songs.length) {
        index = 1;
    }
    playSong(index);
});

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});
right_scroll.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
