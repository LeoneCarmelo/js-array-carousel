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
arrowUp.style.left = 'calc(100% / 2)'
arrowUp.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
containerEl.insertAdjacentElement('afterbegin', arrowUp)
// create arrow Down
const arrowDown = document.createElement('button')
arrowDown.style.bottom = '0'
arrowDown.style.left = 'calc(100% / 2)'
arrowDown.innerHTML = `<i class="fa-solid fa-angle-down"></i>`
containerEl.insertAdjacentElement('beforeend', arrowDown)

//listen for click up
arrowUp.addEventListener('click', function(){     
    //select all the image
    const contImage = document.querySelectorAll('.container > img')
    //select the current image
    const currentImage = contImage[activeImage]
    //remove visible class
    currentImage.classList.remove('visible')
    //increase activeImage variable
    if(activeImage === imgList.length - 1){
        activeImage = 0
    } else {
        activeImage++
    }
    //create another variable for the next image
    let nextImage = contImage[activeImage]
    // add visible class to nextImage
    nextImage.classList.add('visible')
})


//listen for click down
arrowDown.addEventListener('click', function() {
       //select all the image
       const contImage = document.querySelectorAll('.container > img')
       //select the current image
       const currentImage = contImage[activeImage]
       //remove visible class
       currentImage.classList.remove('visible')
       //Decrease activeImage variable
       if (activeImage === 0) {
        activeImage = imgList.length - 1
       } else {
        activeImage--
       }
       //create another variable for the next image
       const nextImage = contImage[activeImage]
       // add visible class to nextImage
       nextImage.classList.add('visible')
})