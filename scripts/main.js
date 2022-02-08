const clouds = document.querySelectorAll('.cloud');
const inner = document.querySelector('.header__title'),
    boat = document.querySelector('.boat'),
    fantasy = document.querySelector('.fantasy');
let text = 'PARALAX EFFECT',
    i = 0,
    speed = 140;

window.addEventListener('scroll', function (e) {
    let scrollY = this.scrollY
    clouds.forEach((el) => {
        const speed = el.getAttribute('data-speed')
        el.style.transform = `translateX(${scrollY * speed}px)`
    })
    const boatSpeed = boat.getAttribute('data-speed')
    boat.style.transform = `translateX(${boatSpeed * scrollY}px)`
    fantasy.style.objectPosition = `0 ${scrollY / 10}%`
})
function typing() {
    if (i < text.length) {
        inner.innerHTML += text.charAt(i);
        i++
        setTimeout(typing, speed);
    }
}

typing();

const paralax__box = document.querySelector('.paralax__box'),
    layer = document.querySelectorAll('.layer');

paralax__box.addEventListener('mousemove', function (e) {
    layer.forEach(el => {
        const speed = el.getAttribute('data-speed')
        let y = (window.innerHeight - e.pageY * speed) / 100
        let x = (window.innerWidth - e.pageX * speed) / 100
        el.style.transform = `translate(${x}px, ${y}px)`
    });
})
// let size = document.querySelectorAll('.timer__num')
// console.log(size);


// function lvl() {
//     if (level.innerHTML <= 50) {
//         level.innerHTML++
//         setTimeout(lvl, 30)
//     } else if (level.innerHTML = 99) {
//         level.innerHTML++
//         setTimeout(lvl, 30)

//     }
// }

let timerNum = document.querySelectorAll('.timer__num');

timerNum.forEach(el => {
    let i = 0;
    let count = 0
    let interval;
    let attr = el.getAttribute('data-timer');
    el.addEventListener('mouseover', () => {
        count++
        if (count == 1) {
            interval = setInterval(() => {
                if (i <= attr) {
                    el.innerHTML = i
                    i++
                }

            }, 100);
            if (count > 1) {
                clearInterval(interval)
            }
        }
    })
})
