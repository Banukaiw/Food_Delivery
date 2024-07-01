const songs = [
    { id: 1, songName: "Aye Enna Pana Mage", subtitle: "Chamika Sirimanna" },
    { id: 2, songName: "Channa Kinnaravi", subtitle: "Bachi Susan" },
    { id: 3, songName: "Sudu Pata Mal Watuna", subtitle: "Gayantha Wijerathna" },
    { id: 4, songName: "Ma Hade Sithum Kola Hagum", subtitle: "D Tap" },
    { id: 5, songName: "Nil Sanda Madala", subtitle: "Centigradz" },
    { id: 6, songName: "Sanda Yathra Kala Wage", subtitle: "Chandana Liyanarachchi" },
    { id: 7, songName: "Visekara Arumaththi", subtitle: "Ranindu" },
    { id: 8, songName: "Mitti Di Khushboo", subtitle: "Ayushmann Khurrana" },
    { id: 9, songName: "Galana Ganga", subtitle: "Charitha Attalage Ft. Ravi Jay" },
    { id: 10, songName: "Who I Am", subtitle: "Alan Walker" },
    { id: 11, songName: "Pahasara Sitha Langa", subtitle: "Niro Brave" },
    { id: 12, songName: "Piya Aaye Na", subtitle: "KK and Tulsi Kumar" },
    { id: 13, songName: "Isa", subtitle: "Andro" },
    { id: 14, songName: "Kakuli", subtitle: "Costa" },
    { id: 15, songName: "Bez Tebja Ja Ne Ja", subtitle: "HammAli & Navai and JONY" }
];
Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        music.src = `audio/${index}.mp3`
        poster_master_play.src = `images/${index}.jpg`;
        music.play();
        let song_title = songs.find((ele) => {
            return ele.id == index;
        });

        if (song_title) {
            title.innerHTML = song_title.songName;
            document.querySelector('#title .subtitle').innerText = song_title.subtitle;
        }

        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        wave.classList.add('active2');
        music.addEventListener('ended', () => {
            masterPlay.classList.add('fa-play');
            masterPlay.classList.remove('fa-pause');
            wave.classList.remove('active2');
        });
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
    });
});
back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = songs.length;
    }
    music.src = `audio/${index}.mp3`
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    let song_title = songs.find((ele) => {
        return ele.id == index;
    });

    if (song_title) {
        title.innerHTML = song_title.songName;
        document.querySelector('#title .subtitle').innerText = song_title.subtitle;
    }

    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('fa-circle-play');
    document.getElementById(`${index}`).classList.add('fa-circle-pause');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
});

next.addEventListener('click', () => {
    index += 1;
    if (index > songs.length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    let song_title = songs.find((ele) => {
        return ele.id == index;
    });

    if (song_title) {
        title.innerHTML = song_title.songName;
        document.querySelector('#title .subtitle').innerText = song_title.subtitle;
    }

    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('fa-circle-play');
    document.getElementById(`${index}`).classList.add('fa-circle-pause');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
});
