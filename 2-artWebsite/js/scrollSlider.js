$.scroll = () => {
    const windowWidth = window.innerWidth;
    const slider = document.querySelector('.slider');
    const scrollWidth = slider.scrollWidth;
    const maxScroll = scrollWidth - windowWidth;
    slider.insertAdjacentElement('beforeend', slider.firstElementChild)
    slider.scrollBy(maxScroll, 0)
}



document.querySelector('.slider-icon').addEventListener('click', () => {
    // const windowWidth = window.innerWidth;
    // const slider = document.querySelector('.slider');
    // const scrollWidth = slider.scrollWidth;
    // const maxScroll = scrollWidth - windowWidth;
    // slider.insertAdjacentElement('beforeend', slider.firstElementChild)
    // slider.scrollBy(maxScroll, 0)
    $.scroll()
})

let autoScroll = setInterval($.scroll, 2000)

document.querySelector('.slider').addEventListener('mouseover', () => {
    clearInterval(autoScroll)
})

document.querySelector('.slider').addEventListener('mouseout', () => {
    autoScroll = setInterval($.scroll, 2000)
})