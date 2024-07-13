document.addEventListener("DOMContentLoaded", (e) => {
    const counterID = document.getElementById('counter')
    let storeCount = 0
    
    function startCount(interval) {
      return setInterval(function() {
        storeCount++
        counterID.textContent = storeCount
      }, interval)
    }
    letsCount = startCount(1000);
    const pauseButton = document.getElementById('pause')

  pauseButton.addEventListener('click', (e) => {
    if (pauseButton.innerText === 'pause') {
      pauseButton.innerText = 'resume'
      clearInterval(letsCount)  
    } else {
      counterID.textContent = 0
      storeCount = 0
      startCount(1000)
      pauseButton.innerText = 'pause'
      // clearInterval(letsCount)  
    }
  })


  const minusButton = document.getElementById('minus')
  minusButton.addEventListener('click', (e) => {
    storeCount--
  })


  const plusButton = document.getElementById('plus')
  plusButton.addEventListener('click', (e) => {
    storeCount++
  })

  const heartButton = document.getElementById('heart')
  heartButton.addEventListener('click', (e) => {
    const likeSection = document.getElementsByClassName('likes')
    const li = document.createElement('li')
    li.textContent = `${storeCount} has been liked x time(s)`
    document.body.appendChild(li)
  })

  const submitButton = document.getElementById('submit')
  submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    li.textContent = formInput.value
    commentSection.appendChild(li)
  })
})
