radio.onReceivedNumber(function (receivedNumber) {
    Recebe_Controle_por_Rádio(receivedNumber)
})
function Recebe_Controle_por_Rádio (mensagem: number) {
    if (mensagem == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (mensagem == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (mensagem == 2) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else if (mensagem == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
}
basic.showLeds(`
    # # . # #
    . # . # #
    . # . . .
    . # # # .
    . # . # .
    `)
radio.setGroup(2)
