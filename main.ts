radio.onReceivedValue(function (name, value) {
    if (name == "virar") {
        if (value > 0) {
            Vira = Math.constrain(value, 0, 90)
            vdir = Math.map(Vira, 0, 90, Velocidade, 0)
            vesq = Velocidade
        } else if (value < 0) {
            vdir = Velocidade
            Vira = value * -1
            Vira = Math.constrain(Vira, 0, 90)
            vesq = Math.map(Vira, 0, 90, Velocidade, 0)
        }
    } else if (name == "andar") {
        if (value == 0) {
            Direcção = 0
        } else if (value == 1) {
            Direcção = 1
        } else if (value == 2) {
            Direcção = 2
        } else if (value == 11 || value == 22) {
            vdir = Velocidade
            vesq = Velocidade
        }
    }
    if (Direcção == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (Direcção == 1) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vesq)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, vdir)
    } else if (Direcção == 2) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, vesq)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, vdir)
    }
})
let Vira = 0
let Velocidade = 0
let Direcção = 0
let vesq = 0
let vdir = 0
basic.showLeds(`
    # # # # #
    . . . . #
    # # # # #
    # . . . .
    # # # # #
    `)
radio.setGroup(2)
vdir = 100
vesq = 100
Direcção = 0
Velocidade = 255
