const translate = document.querySelectorAll('.translate');
const big_title = document.querySelectorAll('.big-title');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })
})