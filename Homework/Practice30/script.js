let foo = function (input) {
    if (input === true)
        alert('Верно')
    else
        alert('Неверно')
}
test = true
foo(test)
test = false
foo(test)
test = !0
foo(test)
test = 0
foo(test)


foo = function (input) {
    if (input !== true)
        alert('Верно')
    else
        alert('Неверно')
}
test = true
foo(test)
test = false
foo(test)
test = !0
foo(test)
test = 0
foo(test)


foo = function (input) {
    if (input > 0 && input < 5)
        alert('Верно')
    else
        alert('Неверно')
}
test = 5
foo(test)
test = 0
foo(test)
test = -3
foo(test)
test = 2
foo(test)


foo = function (input) {
    if (input === 0 || input === 2) {
        input+=7
    }
    else {
        input/=10
    }
    alert('a = ' + input)
}
test = 5
foo(test)
test = 0
foo(test)
test = -3
foo(test)
test = 2
foo(test)


foo = function (a, b) {
    if (a <= 1 && b >= 3) {
        a += b
        alert('a + b = ' + a)
    }
    else {
        a -= b
        alert('a - b = ' + a)
    }

}
let a = 1
let b = 3
foo(a, b)
a = 0
b = 6
foo(a, b)
a = 3
b = 5
foo(a, b)


foo = function (a, b) {
    if (a > 2 && a < 11 && b >= 6 && b < 14) {
        alert('Верно')
    }
    else {
        alert('Неверно')
    }
}
a = 1
b = 3
foo(a, b)
a = 0
b = 6
foo(a, b)
a = 3
b = 5
foo(a, b)


let num = 3
let result
switch (num) {
    case 1:
        result = 'зима'        
        break;
    case 2:
        result = 'весна'
        break;
    case 3:
        result = 'лето'
        break;
    case 4:
        result = 'осень'
        break;
    default:
        break;
}
alert('Время года - ' + result)