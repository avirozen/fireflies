radio.onReceivedNumber(function (receivedNumber) {
    clock += 1
})
let clock = 0
radio.setTransmitPower(1)
radio.setGroup(12)
basic.forever(function () {
    // if clock hits noon, flash the screen
    if (clock >= 8) {
        // notify neighbors
        radio.sendNumber(0)
        // flash
        game.addScore(1)
        // wait for 2 ticks
        basic.pause(200)
        // reset the clock
        clock = 0
    } else {
        // just wait a bit
        basic.pause(100)
        clock += 1
    }
})
