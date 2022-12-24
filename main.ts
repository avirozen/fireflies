radio.onReceivedNumber(function (receivedNumber) {
    clock += 1
})
let clock = 0
radio.setTransmitPower(1)
radio.setGroup(12)
basic.forever(function () {
    if (clock >= 8) {
        radio.sendNumber(0)
        game.addScore(1)
        basic.pause(200)
        clock = 0
    } else {
        basic.pause(100)
        clock += 1
    }
})
