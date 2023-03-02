input.onButtonPressed(Button.A, function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
basic.forever(function () {
    basic.showString("Liv")
    basic.showIcon(IconNames.Ghost)
    basic.pause(2000)
    basic.clearScreen()
})
