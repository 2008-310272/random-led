x = 0
y = 0
list2: List[number] = []
n = 0
a = 0
def 燈數(num: number):
    global x, y
    if num / 5 == 0:
        x = 4
        y = Math.floor(num / 5 - 1)
    else:
        x = num % 5 - 1
        y = Math.floor(num / 5)
    led.plot(x, y)

def on_button_pressed_a():
    global list2, n, a
    basic.clear_screen()
    list2 = []
    for index in range(25):
        list2.append(0)
    n = 0
    while n < 3:
        a = randint(0, 24)
        if list2[a] == 0:
            list2[a] = 1
            n += 1
            燈數(a + 1)
input.on_button_pressed(Button.A, on_button_pressed_a)
