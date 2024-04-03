// target all the dom elements


const artist_face = document.querySelector('.artist-face')
const artist_name = document.querySelector('.artist-name')
const song_title = document.querySelector('.song-title')
const song = document.getElementById('song');
const progressBar = document.getElementById('progress');
const prev_btn = document.querySelector('#prev');
const play_btn = document.querySelector('#play');
const next_btn = document.querySelector('#next');

// creating the dynamic variables
let current_music_index = 0;
let play_list_size = playLists.length;
// selecting the first music
let current_music = playLists[current_music_index]

//    setting the inner html for the music details
artist_face.src = current_music.artist_image;
artist_name.innerHTML = current_music.artist_name
song_title.innerHTML = current_music.title;
song.src = current_music.music

// get the meta deta for the song ready
song.addEventListener('loadedmetadata', (e)=>{
      
    // set the max value for the progress bar
      progressBar.max = song.duration

    // setting the current value of the progress bar
       progressBar.value = song.currentTime
       
})

// creating the progress update
function updateProgressBar(){
       setInterval(() => {
              progressBar.value = song.currentTime  
       }, 500);
}

progressBar.addEventListener('change', (e)=>{
    e.preventDefault()
    song.currentTime = progressBar.value
    song.play()

})

play_btn.addEventListener('click', ()=>{
   
    play_btn.classList.toggle("pause")
    if(play_btn.classList.contains("pause")){
        song.play()
        updateProgressBar()
        play_btn.src = "./images/pause.png"
        
    }else{
        song.pause()
        play_btn.src = "./images/play.png"
        updateProgressBar()
    }
})

// adding functionality to our next btn
next_btn.addEventListener('click', (e)=>{
     e.preventDefault()
     if(current_music_index < play_list_size){
           current_music_index++
           current_music = playLists[current_music_index]

        //    setting the inner html for the music details
        artist_face.src = current_music.artist_image;
        artist_name.innerHTML = current_music.artist_name
        song_title.innerHTML = current_music.title;
        song.src = current_music.music
     }
})