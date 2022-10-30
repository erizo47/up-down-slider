const buttondown = document.querySelector('.down-button')
const buttonup = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

const container = document.querySelector('.container')

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

buttonup.addEventListener('click', () => {
    changeSlide('up')
})

buttondown.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', (event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
}))

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        changeSlide('down')
    } else if (event.deltaY < 0) {
        changeSlide('up')
    }    
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === 4) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }    
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`
}
