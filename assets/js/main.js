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
let images = ''
for(let i = 0; i < imgList.length; i++) {
    const imgName = imgList[i]
    images = `<img src="./assets/img/${imgName}" class="${i === activeImage ? 'visible' : ''}" >`
    containerEl.innerHTML =  images
}

