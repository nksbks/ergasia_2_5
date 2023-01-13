let ΗΧΟΣ = 0
let ΦΩΣ = 0
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
    ΦΩΣ = input.soundLevel()
    ΗΧΟΣ = ΦΩΣ
    led.setBrightness(ΗΧΟΣ)
})
