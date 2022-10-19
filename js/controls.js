export default function Controls({
  buttonPlay,
  buttonPause,
  buttonCoffeeShop,
  buttonHearth,
  buttonRain,
  buttonForest,
  minutesDisplay,
  secondsDisplay,
  backgroundRain,
  backgroundForest,
  backgroundCoffeeShop,
  backgroundHearth,
  minutes,
  buttonNight,
  buttonDay,
  backgroundBody,
  
  
}) {



function play (){
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
}
  
function pause (){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function stopSoud (){
  buttonForest.classList.remove('check')
  buttonRain.classList.remove('check')
  buttonCoffeeShop.classList.remove('check')
  buttonHearth.classList.remove('check')

  backgroundRain.classList.add('hide')
  backgroundForest.classList.add('hide')
  backgroundCoffeeShop.classList.add('hide')
  backgroundHearth.classList.add('hide')

  buttonDay.classList.remove('hide')

  document.getElementById('volumeForest').style.visibility = "hidden"
  document.getElementById('volumeRain').style.visibility = "hidden"
  document.getElementById('volumeCoffeeShop').style.visibility = "hidden"
  document.getElementById('volumeHearth').style.visibility = "hidden"
  
}

function playForest() {
  buttonForest.classList.add('check')
  buttonRain.classList.remove('check')
  buttonCoffeeShop.classList.remove('check')
  buttonHearth.classList.remove('check')

  backgroundForest.classList.remove('hide')
  backgroundRain.classList.add('hide')
  backgroundCoffeeShop.classList.add('hide')
  backgroundHearth.classList.add('hide')

  buttonDay.classList.add('hide')
  buttonNight.classList.add('hide')

  
  document.getElementById('volumeForest').style.visibility = "visible"
  document.getElementById('volumeRain').style.visibility = "hidden"
  document.getElementById('volumeCoffeeShop').style.visibility = "hidden"
  document.getElementById('volumeHearth').style.visibility = "hidden"
}

function playRain() {
  buttonForest.classList.remove('check')
  buttonRain.classList.add('check')
  buttonCoffeeShop.classList.remove('check')
  buttonHearth.classList.remove('check')

  backgroundRain.classList.remove('hide')
  backgroundForest.classList.add('hide')
  backgroundCoffeeShop.classList.add('hide')
  backgroundHearth.classList.add('hide')
 
  buttonDay.classList.add('hide')
  buttonNight.classList.add('hide')

  
  document.getElementById('volumeForest').style.visibility = "hidden"
  document.getElementById('volumeRain').style.visibility = "visible"
  document.getElementById('volumeCoffeeShop').style.visibility = "hidden"
  document.getElementById('volumeHearth').style.visibility = "hidden"
}

function playCoffeeshop() {
  buttonForest.classList.remove('check')
  buttonRain.classList.remove('check')
  buttonCoffeeShop.classList.add('check')
  buttonHearth.classList.remove('check')

  backgroundRain.classList.add('hide')
  backgroundForest.classList.add('hide')
  backgroundCoffeeShop.classList.remove('hide')
  backgroundHearth.classList.add('hide')

  buttonDay.classList.add('hide')
  buttonNight.classList.add('hide')

  
  document.getElementById('volumeForest').style.visibility = "hidden"
  document.getElementById('volumeRain').style.visibility = "hidden"
  document.getElementById('volumeCoffeeShop').style.visibility = "visible"
  document.getElementById('volumeHearth').style.visibility = "hidden"
}

function playHearth() {
  buttonForest.classList.remove('check')
  buttonRain.classList.remove('check')
  buttonCoffeeShop.classList.remove('check')
  buttonHearth.classList.add('check')

  backgroundRain.classList.add('hide')
  backgroundForest.classList.add('hide')
  backgroundCoffeeShop.classList.add('hide')
  backgroundHearth.classList.remove('hide')

  buttonDay.classList.add('hide')
  buttonNight.classList.add('hide')

  
  document.getElementById('volumeForest').style.visibility = "hidden"
  document.getElementById('volumeRain').style.visibility = "hidden"
  document.getElementById('volumeCoffeeShop').style.visibility = "hidden"
  document.getElementById('volumeHearth').style.visibility = "visible"
}

function applyDay() {
  buttonDay.classList.add('hide')
  buttonNight.classList.remove('hide')
  backgroundBody.classList.add('dark-mode')
}

function applyNight() {
  buttonDay.classList.remove('hide')
  buttonNight.classList.add('hide')
  backgroundBody.classList.remove('dark-mode')
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}


function increase() {
  minutes = minutes + 5
  if (minutes >= 60) {
    minutes = 60
  }
  updateTimerDisplay(minutes, 0)
}

function decrease() {
  minutes = minutes - 5
  if (minutes <= 0) {
    minutes = 0 
  } 
  updateTimerDisplay(minutes, 0)
}



return {
  play,
  pause,
  increase,
  decrease,
  playForest,
  playRain,
  playCoffeeshop,
  playHearth,
  stopSoud,
  applyDay,
  applyNight,
}
}

