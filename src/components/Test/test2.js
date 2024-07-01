const music = new Audio('Shaheena.mp3');
// let music = new Audio('path/to/your/music/file.mp3');
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];
let isAutoplayEnabled = false;

document.getElementById('toggleAutoplay').addEventListener('click', () => {
    isAutoplayEnabled = !isAutoplayEnabled;
    document.getElementById('toggleAutoplay').innerText = `Autoplay: ${isAutoplayEnabled ? 'On' : 'Off'}`;
});

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

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = parseInt(e.target.id);
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
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    });

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
    });
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    wave.classList.add('active2');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 170, .1)";

    if (isAutoplayEnabled) {
        music.addEventListener('ended', playNextSong);
    }
};

const playNextSong = () => {
    index += 1;
    if (index > songs.length) {
        index = 1;
    }
    playSong(index);
};

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

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

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

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

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    playSong(index);
});

next.addEventListener('click', () => {
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
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

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', () => {
    item.scrollLeft -= 330;
});
right_scrolls.addEventListener('click', () => {
    item.scrollLeft += 330;
});

const songs = [
    {
        id: '1',
        songName: "Aye Enna Pana Mage<br><div class='subtitle'>Chamika Sirimanna</div>",
        poster: "images/1.jpg"
    },
    {
        id: '2',
        songName: "Channa Kinnaravi<br><div class='subtitle'>Bachi Susan</div>",
        poster: "images/2.jpg"
    },
    {
        id: '3',
        songName: "Sudu Pata Mal Watuna<br><div class='subtitle'>Gayantha Wijerathna</div>",
        poster: "images/3.jpg"
    },
    {
        id: '4',
        songName: "Ma Hade Sithum Kola Hagum<br><div class='subtitle'>D Tap</div>",
        poster: "images/4.jpg"
    },
    {
        id: '5',
        songName: "Nil Sanda Madala<br><div class='subtitle'>Centigradz</div>",
        poster: "images/5.jpg"
    },
    {
        id: '6',
        songName: "Sanda Yathra Kala Wage<br><div class='subtitle'>Chandana Liyanarachchi</div>",
        poster: "images/6.jpg"
    },
    {
        id: '7',
        songName: "Visekara Arumaththi<br><div class='subtitle'>Ranindu</div>",
        poster: "images/7.jpg"
    },
    {
        id: '8',
        songName: "Mitti Di Khushboo<br><div class='subtitle'>Ayushmann Khurrana</div>",
        poster: "images/8.jpg"
    },
    {
        id: '9',
        songName: "Galana Ganga<br><div class='subtitle'>Charitha Attalage Ft. Ravi Jay</div>",
        poster: "images/9.jpg"
    }
  
       
    ]