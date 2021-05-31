input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        Hungry.showImage(0)
        Empty.showImage(0)
    }
})
let Empty: Image = null
let Hungry: Image = null
let Happy = images.createImage(`
    . . . . .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
let Sad = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    # . . . #
    `)
Hungry = images.createImage(`
    # . . . #
    # # # # #
    . # . # .
    . # . # .
    . . # . .
    `)
Empty = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 1000) {
        Happy.showImage(0)
    } else {
        if (input.acceleration(Dimension.Y) < -500) {
            Sad.showImage(0)
        } else {
            Empty.showImage(0)
        }
    }
})
