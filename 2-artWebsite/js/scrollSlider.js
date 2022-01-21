document.querySelector('.slider-icon').addEventListener('click', () => {
    const windowWidth = window.innerWidth;
    const slider = document.querySelector('.slider');
    const scrollWidth = slider.scrollWidth;
    const maxScroll = scrollWidth - windowWidth;
    slider.insertAdjacentElement('beforeend', slider.firstElementChild)
    slider.scrollBy(maxScroll, 0)

})