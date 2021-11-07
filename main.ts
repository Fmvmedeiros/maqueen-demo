let Escolha = 0
basic.showLeds(`
    . # . # .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Orange))
let Velocidade = 30
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidade)
let Espera = 0
music.playTone(165, music.beat(BeatFraction.Eighth))
music.playTone(330, music.beat(BeatFraction.Eighth))
music.playTone(659, music.beat(BeatFraction.Eighth))
basic.forever(function () {
    strip.show()
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 3) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        music.playTone(392, music.beat(BeatFraction.Quarter))
        Velocidade = 30
        Espera += 1
        if (Espera > 2) {
            Escolha = randint(0, 1)
            if (Escolha > 0) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
            } else {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
            }
            basic.pause(randint(1000, 3000))
        }
    } else {
        Espera = 0
        Velocidade += 1
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidade)
    }
})
