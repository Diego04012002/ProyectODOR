let app = document.getElementById('typewriter')
let play=true
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75
})

typewriter
  .pauseFor(2500)
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start()

document.getElementById('audioClick').addEventListener('click', function () {
  var audio = document.getElementById('myAudio')
  if(play){
    audio.currentTime=0
    audio.play()
    play=false
  }else{
    audio.pause()
    play=true
  }
})
