console.log("Welcome to the world of music");
//Initialize the variables
let songIndex =0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: 'Abaad Barbaad', filePath: 'songs/1.mp3', coverPath: 'cover1.png'},
    {songName: 'Aaj Se Teri', filePath: 'songs/2.mp3', coverPath: 'cover2.png'},
    {songName: 'Afreeda', filePath: 'songs/3.mp3', coverPath: 'cover3.png'},
    {songName: 'Lae Dooba', filePath: 'songs/4.mp3', coverPath: 'cover4.png'},
    {songName:  'Baatein ye kabhi na', filePath: 'songs/5.mp3', coverPath: 'cover5.png'},
    {songName:  'Bekhayali', filePath: 'songs/6.mp3', coverPath: 'cover6.png'},
    {songName:  'Bezubaan', filePath: 'songs/7.mp3', coverPath: 'cover7.png'},
    {songName:  'Boond boond', filePath: 'songs/8.mp3', coverPath: 'cover8.png'},
    {songName: 'Dekh Lena', filePath: 'songs/9.mp3', coverPath: 'cover9.png'},
    {songName:  'Dekhte dekhte', filePath: 'songs/10.mp3', coverPath: 'cover10.png'},
    {songName: 'Dil Bechara', filePath: 'songs/11.mp3', coverPath: 'cover11.png'},
    {songName: 'Dil diya gallan', filePath: 'songs/12.mp3', coverPath: 'cover12.png'},
    {songName: 'Dil Julaah', filePath: 'songs/13.mp3', coverPath: 'cover13.png'},
    {songName: 'Dil k Paas', filePath: 'songs/14.mp3', coverPath: 'cover14.png'},
    {songName: 'Dilbara', filePath: 'songs/15.mp3', coverPath: 'cover15.png'},
    {songName: 'Duniyaa', filePath: 'songs/16.mp3', coverPath: 'cover16.png'},
    {songName: 'Ek Raat', filePath: 'songs/17.mp3', coverPath: 'cover17.png'},
    {songName: 'Enni Soni', filePath: 'songs/18.mp3', coverPath: 'cover18.png'},
    {songName: 'Filhaal', filePath: 'songs/19.mp3', coverPath: 'cover19.png'},
    {songName: 'Friendzone- Dil Bechara', filePath: 'songs/20.mp3', coverPath: 'cover20.png'},
    {songName: 'Humari Adhoori Kahani', filePath: 'songs/21.mp3', coverPath: 'cover21.png'},
]
    
songItem.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=21){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})