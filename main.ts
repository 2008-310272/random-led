let x = 0
let y = 0
let list2: number[] = []
let n = 0
let a = 0
function led2 (num: number) {
    if (num / 5 == 0) {
        x = 4
        y = Math.floor(num / 5 - 1)
    } else {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    list2 = []
    for (let index = 0; index < 25; index++) {
        list2.push(0)
    }
    n = 0
    while (n < 25) {
        a = randint(0, 24)
        if (list2[a] == 0) {
            list2[a] = 1
            n += 1
            led2(a + 1)
        }
    }
    basic.pause(100)
})
