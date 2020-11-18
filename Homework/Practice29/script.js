let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
alert(arr[1][0])


arr = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}
alert(arr.js[0])


arr = {
    ru:['Понедельник',
        'Вторик',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'],
    
    en:['Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Satarday',
        'Sunday',
    ]
}
alert(arr.ru[0] + '\n' + arr.en[2])


let lang = 'ru'
let day = 3
alert(arr[lang][day])

let foo = function (a) {
    if (a == 0) {
        alert('верно')
    } else alert('Неверно')
}
let test = function () {
    let a = 1
    foo(a)
    a = 0
    foo(a)
    a = -3
    foo(a)
}
test()


foo = function (a) {
    if (a > 0) {
        alert('верно')
    } else alert('Неверно')
}
test()

foo = function (a) {
    if (a < 0) {
        alert('верно')
    } else alert('Неверно')
}
test()


foo = function (a) {
    if (a >= 0) {
        alert('верно')
    } else alert('Неверно')
}
test()


foo = function (a) {
    if (a <= 0) {
        alert('верно')
    } else alert('Неверно')
}
test()


foo = function (a) {
    if (a != 0) {
        alert('верно')
    } else alert('Неверно')
}
test()


foo = function (a) {
    if (a === 'test') {
        alert('верно')
    } else alert('Неверно')
}
a = 'test'
foo(a)
a = 'тест'
foo(a)
a = 3
foo(a)

foo = function (a) {
    if (a === '1') {
        alert('верно')
    } else alert('Неверно')
}
a = '1'
test(a)
a = 1
test(a)
a = 3
test(a)