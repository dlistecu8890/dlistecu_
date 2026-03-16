let sound = document.getElementById("sound")

// sound auto play
window.onload = function(){

sound.volume = 1

sound.play()

}

// paksa tetap play
setInterval(()=>{

if(sound.paused){

sound.play()

}

},1000)


// vibrate
if(navigator.vibrate){

setInterval(()=>{

navigator.vibrate(500)

},3000)

}


// fullscreen
document.documentElement.requestFullscreen()

// disable back
history.pushState(null,null,location.href)

window.onpopstate = function(){

history.go(1)

}
