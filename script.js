let arrowHour = document.querySelector('.hour-cont'),
    arrowMin = document.querySelector('.min-cont'),
    arrowSec = document.querySelector('.sec-cont'),
    rot_deg = 6

function clock() {
    let date = new Date
    let hour = date.getHours() * 30
    let min = date.getMinutes() * rot_deg
    let sec = date.getSeconds() * rot_deg

    arrowHour.style.cssText = `transform: rotate(-${hour + min / 12}deg)`
    arrowMin.style.cssText = `transform: rotate(-${min}deg)`
    arrowSec.style.cssText = `transform: rotate(-${sec}deg)`

    arrowSec.classList.add('secanim')
    setTimeout(() => {
        arrowSec.classList.remove('secanim')
    }, 300)

    if (rot_deg == 0) {
        rot_deg = 360
    }
}
clock()

setInterval(() => {
    clock()
}, 1000);