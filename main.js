window.addEventListener("keydown",function(e){
    playAudio(e)
    addClass(e)
});

window.addEventListener("keyup",function(e){
    removeClass(e)
});

function playAudio (event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
};

function addClass (event) {
    const div = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if(!div) return;
    div.classList.add("playing")
};

function removeClass (event) {
    const div = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if(!div) return;
    div.classList.remove("playing") 
}