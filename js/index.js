import Timer from "./timer.js"
import Controls from "./controls.js"
import Sounds from "./sounds.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonStopSoud,
  buttonincrease,
  buttondecrease,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonHearth,
  minutesDisplay,
  secondsDisplay,
  backgroundBody,
  backgroundCoffeeShop,
  backgroundForest,
  backgroundHearth,
  backgroundRain,
  buttonDay,
  buttonNight,
  volumeCoffeeShop,
  volumeForest,
  volumeRain,
  volumeHearth
} from "./elements.js"

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const controls = Controls ({
  buttonPause,
  buttonPlay,
  minutesDisplay, 
  secondsDisplay,
  minutes,
  buttonCoffeeShop,
  buttonHearth,
  buttonRain,
  buttonForest,
  backgroundRain,
  backgroundForest,
  backgroundCoffeeShop,
  backgroundHearth,
  buttonNight,
  buttonDay,
  backgroundBody,
  volumeForest,
  volumeCoffeeShop,
  volumeHearth,
  volumeRain,
 

})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  timerTimeOut,
  minutes,
  resetControls: controls.pause,
  
 
})

const sound = Sounds()

buttonStopSoud.addEventListener('click', function(){
  sound.pressButtonStopSound()
  controls.stopSoud()
  sound.pressButton()

})

buttonPlay.addEventListener('click', function(){
  sound.pressButton()
  controls.play () 
  timer.countdown()
  
  
})

buttonPause.addEventListener('click', function(){
  sound.pressButton()
  controls.pause ()
  timer.hold()
})

buttonStop.addEventListener('click', function() {
  sound.pressButton()
  controls.pause()
  timer.reset()
  
  
})

buttonincrease.addEventListener('click', function(){
  sound.pressButton()
  controls.increase ()
  
})

buttondecrease.addEventListener('click', function(){
  sound.pressButton()
  controls.decrease()
})

buttonForest.addEventListener ('click', function (){
  controls.playForest()
  sound.pressButtonForestPlay()
})

buttonRain.addEventListener ('click', function(){
  controls.playRain()
  sound.pressButtonRainPlay()
})

buttonCoffeeShop.addEventListener ('click', function(){
  controls.playCoffeeshop()
  sound.pressButtonCoffeeShopPlay()
})

buttonHearth.addEventListener ('click', function(){
  controls.playHearth()
  sound.pressButtonHearthPlay()
})

buttonDay.addEventListener ('click', function(){
  controls.applyDay()
  sound.pressButton()
})

buttonNight.addEventListener ('click', function(){
  controls.applyNight()
  sound.pressButton()
})


