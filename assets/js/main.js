//Lista immagini
const imgList = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
]


// Select the active image
let activeImage = 0
// Container img
const containerEl = document.querySelector('.container')
let images =  ''
for(let i = 0; i < imgList.length; i++) {
    const imgName = imgList[i]
    images += `<img src="./assets/img/${imgName}" class="${i === activeImage ? 'visible' : ''}" >`
    containerEl.innerHTML = images
}

// create arrow Up
const arrowUp = document.createElement('button')
arrowUp.style.top = '0'
arrowUp.style.right = '80px'
arrowUp.style.zIndex = '1'
arrowUp.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
containerEl.insertAdjacentElement('afterbegin', arrowUp)

// create arrow Down
const arrowDown = document.createElement('button')
arrowDown.style.bottom = '0'
arrowDown.style.right = '80px'
arrowDown.style.zIndex = '1'
arrowDown.innerHTML = `<i class="fa-solid fa-angle-down"></i>`
containerEl.insertAdjacentElement('beforeend', arrowDown)

// create thumbnails
const thumbnails = document.createElement('div')
thumbnails.setAttribute('id', 'cont-tiny-images')
thumbnails.style.width = '200px'
thumbnails.style.height = '100%'
thumbnails.style.position = 'absolute'
thumbnails.style.right = '0'
thumbnails.style.top = '0'
thumbnails.style.backgroundColor = 'black'
containerEl.append(thumbnails)

//create container tiny images
for (let i = 0; i < imgList.length; i++){
    const contTinyImage = document.createElement('div')
    contTinyImage.style.width = '100%'
    contTinyImage.style.height = 'calc(100% / 5)'
    contTinyImage.style.display = 'block'
    contTinyImage.style.backgroundImage = `url(../assets/img/${imgList[i]})`
    contTinyImage.style.backgroundSize = 'cover'
    contTinyImage.style.backgroundPosition = 'center'
    thumbnails.insertAdjacentElement('beforeend', contTinyImage)
}

  //select all the container of the tiny image
  const allContImages = document.querySelectorAll('#cont-tiny-images > div')
  //select the current container of the tiny image
  let currentContImages = allContImages[activeImage]
  currentContImages.classList.add('selected')
  console.log(currentContImages)

//listen for click down
arrowDown.addEventListener('click', function() {
    //select all the image
    const contImage = document.querySelectorAll('.container > img')
    //select all the container of the tiny image
    const allContImages = document.querySelectorAll('#cont-tiny-images > div')
    //select the current image
    const currentImage = contImage[activeImage]
    //select the current container of the tiny image
    const currentContImages = allContImages[activeImage]
    //remove visible class
    currentImage.classList.remove('visible')
    //remove selected class
    currentContImages.classList.remove('selected')
    //increase activeImage variable
    if(activeImage === imgList.length - 1){
        activeImage = 0
    } else {
        activeImage++
    }
    //create another variable for the next image
    const nextImage = contImage[activeImage]
    // add visible class to nextImage
    nextImage.classList.add('visible')
    //create another variable for the next contImage
    const nextContImage = allContImages[activeImage]
    // add selected class to the nextContImage
    nextContImage.classList.add('selected')
})
//listen for click up
arrowUp.addEventListener('click', function(){     
    //select all the image
    const contImage = document.querySelectorAll('.container > img')
    //select all the container of the tiny image
    const allContImages = document.querySelectorAll('#cont-tiny-images > div')
    //select the current image
    const currentImage = contImage[activeImage]
    //select the current container of the tiny image
    const currentContImages = allContImages[activeImage]
    //remove visible class
    currentImage.classList.remove('visible')
    //remove selected class
    currentContImages.classList.remove('selected')
    //Decrease activeImage variable
    if (activeImage === 0) {
        activeImage = imgList.length - 1
    } else {
        activeImage--
    }
    //create another variable for the next image
    let nextImage = contImage[activeImage]
    // add visible class to nextImage
    nextImage.classList.add('visible')
    //create another variable for the next contImage
    const nextContImage = allContImages[activeImage]
    // add selected class to the nextContImage
    nextContImage.classList.add('selected')
})