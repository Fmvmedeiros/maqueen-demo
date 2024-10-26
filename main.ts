radio.onReceivedValue(function (name, value) {
    if (name == "virar") {
        if (value > 0) {
            vdir = Math.map(Math.constrain(value, 0, 90), 0, 90, vdir, 0)
            vesq = 100
        } else if (value < 0) {
            vdir = 100
            vesq = Math.map(Math.constrain(value, 0, 90), 0, 90, 0, vesq)
        }
    } else if (name == "andar") {
        if (value == 0) {
            Direcção = 0
        } else if (value == 1) {
            Direcção = 1
        } else if (value == 2) {
            Direcção = 2
        } else if (value == 11 || value == 22) {
            vdir = 100
            vdir = 100
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
