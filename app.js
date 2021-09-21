const buttonDown = document.querySelector('.down-button')
const buttonUp = document.querySelector('.up-button')
const sideBar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlide = 0;
sideBar.style.top = `-${(slidesCount-1)*100}vh`

buttonUp.addEventListener('click', ()=>{changeSlide('up')})
buttonDown.addEventListener('click', ()=>{changeSlide('down')})

function changeSlide(direction) {
    if(direction==='up') {
        activeSlide++
        if(activeSlide===slidesCount) {
            activeSlide = 0
        }
    } else if(direction==='down') {
        activeSlide--
        if(activeSlide<0) {
            activeSlide = slidesCount-1
        }
    }

    const height = container.clientHeight
    mainSlide.style.transform=`translateY(-${activeSlide*height}px)`
    sideBar.style.transform=`translateY(${activeSlide*height}px)`
}
