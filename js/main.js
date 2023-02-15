let app = document.getElementById('typewriter')

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
  audio.currentTime=0
  audio.play()
})
