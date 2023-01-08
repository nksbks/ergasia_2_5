let ΕΠΙΠΕΔΟ_ΗΧΟΥ = 0
let ΕΠΙΠΕΔΟ_ΦΩΤΕΙΝΟΤΗΤΑΣ = 0
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
    ΕΠΙΠΕΔΟ_ΦΩΤΕΙΝΟΤΗΤΑΣ = input.soundLevel()
    ΕΠΙΠΕΔΟ_ΗΧΟΥ = ΕΠΙΠΕΔΟ_ΦΩΤΕΙΝΟΤΗΤΑΣ
    led.setBrightness(ΕΠΙΠΕΔΟ_ΗΧΟΥ)
})
