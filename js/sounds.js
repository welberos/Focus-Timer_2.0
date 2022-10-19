export default function Sounds(){

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const audioRain = document.querySelector('.audioRain')
  const audioForest = document.querySelector('.audioForest')
  const audioCoffeeShop = document.querySelector('.audioCoffeShop')
  const audioHearth = document.querySelector('.audioHearth')

  audioRain.loop = true
  audioForest.loop = true
  audioCoffeeShop.loop = true
  audioHearth.loop = true

  function timeEnd() {
    kitchenTimer.play()
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  

  volumeForest.addEventListener('input', () => {
    audioForest.volume = volumeForest.value / 100
  })

  volumeHearth.addEventListener('input', () => {
    audioHearth.volume = volumeHearth.value / 100
  })

  volumeRain.addEventListener('input', () => {
    audioRain.volume = volumeRain.value / 100
  })

  volumeCoffeeShop.addEventListener('input', () => {
    audioCoffeeShop.volume = volumeCoffeeShop.value / 100
  })

  function pressButtonForestPlay () {
    audioForest.play()
    audioRain.pause()
    audioCoffeeShop.pause()
    audioHearth.pause()
  }

  function pressButtonRainPlay () {
    audioForest.pause()
    audioRain.play()
    audioCoffeeShop.pause()
    audioHearth.pause()
  }

  function pressButtonCoffeeShopPlay () {
    audioForest.pause()
    audioRain.pause()
    audioCoffeeShop.play()
    audioHearth.pause()
  }

  function pressButtonHearthPlay () {
    audioForest.pause()
    audioRain.pause()
    audioCoffeeShop.pause()
    audioHearth.play()
  }

  function pressButtonStopSound () {
    audioForest.pause()
    audioRain.pause()
    audioCoffeeShop.pause()
    audioHearth.pause()
  }

  
  return {
    pressButton,
    timeEnd,
    pressButtonForestPlay,
    pressButtonRainPlay,
    pressButtonStopSound,
    pressButtonCoffeeShopPlay,
    pressButtonHearthPlay,
  }
}