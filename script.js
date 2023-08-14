console.log("welcome to spotify");
//initialize te variables
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
//let masterSongName =getElementById('masterSongName');
let songitems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "blankspace taylor swift", filepath: "songs/1.mp3", coverpage: "covers/1.jpg" },
    { songName: "unstoppable", filepath: "songs/2.mp3", coverpage: "covers/2.jpg" },
    { songName: "senorita", filepath: "songs/3.mp3", coverpage: "covers/3.jpg" },
    { songName: "maroon 5 memories", filepath: "songs/4.mp3", coverpage: "covers/4.jpg" },
    { songName: "joker bgm", filepath: "songs/5.mp3", coverpage: "covers/5.jpg" },
    { songName: "tu Hai to aur kya cHiye", filepath: "songs/2.mp3", coverpage: "covers/6.jpg" },
    { songName: "janam-janam", filepath: "songs/2.mp3", coverpage: "covers/7.jpg" },
    { songName: "pink-lips", filepath: "songs/2.mp3", coverpage: "covers/8.jpg" },
    { songName: "main tera boyfriend", filepath: "songs/2.mp3", coverpage: "covers/9.jpg" },
    { songName: "ya ali", filepath: "songs/4.mp3", coverpage: "covers/10.jpg" },
]
songitems.forEach((element, i) => {
    //console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpage;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play();
//Handle play/pause click

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// listen to event
audioElement.addEventListener('timeupdate', () => {
    //console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    //console.log(progress)
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change', () => {
    audioElement.currentTime = myprogressBar.value * audioElement.duration / 100;
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = ` songs/${songindex+1}.mp3`;
       // masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex = 0
    }
    else{
        songindex +=1;
    }
    audioElement.src = ` songs/${songindex+1}.mp3`;
    //masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -=1;
    }
    audioElement.src = ` songs/${songindex+1}.mp3`;
       // masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})