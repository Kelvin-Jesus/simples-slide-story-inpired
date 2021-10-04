const tipsContainer = document.querySelector('.tips-container')
const storyContainer = document.querySelector('.story-container')
const storyWrapper = document.querySelector('.wrapper')
const imgsNodeList = document.querySelectorAll('.wrapper img')
const imgsArray = Array.from(imgsNodeList)

const imgsInfo = {
  count: 0,
  images: imgsArray,
  itemAtual: 0
}



const createStoryTip = () => {
  
  let storyTip = document.createElement('li')
  storyTip.classList.add('story-tip')
  tipsContainer.childElementCount == 0 && storyTip.classList.add('active')
  tipsContainer.appendChild(storyTip)
  tipsContainer.style.gridTemplateColumns = `repeat(${imgsArray.length}, 1fr)`
  
}

const activeStoryTip = (st) => {
  tipsContainer.querySelectorAll('li').forEach(i=>i.classList.remove('active'))
  st.classList.add('active')
}

imgsArray.map( (i, index) => {

  imgsInfo.count++
  createStoryTip()
  
})

const interval = setInterval(()=>{
  slideRight(imgsInfo.itemAtual++)
}, 2500)

const slideRight = (itemAtual) => {

  if (itemAtual < imgsArray.length) {
    activeStoryTip(tipsContainer.querySelectorAll('li')[itemAtual])
    storyWrapper.style.transform = `translate3d(-${storyContainer.offsetWidth * itemAtual}px, 0, 0)`
  }
  
  else if (itemAtual >= imgsArray.length) {
    storyWrapper.style.transform = `translate3d(0p, 0, 0)`
    imgsInfo.itemAtual = 0
  }
  
}
