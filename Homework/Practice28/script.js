let now = new Date
let min = 60
let hour = min * 60
let day = hour * 24
let month = (33 - new Date(now.getFullYear(), now.getMonth(), 33).getDate()) * day
alert('secs in hour = ' + hour + '\n' +
    'secs in day = ' + day + '\n' +
    'secs in month = ' + month)


hour = now.getHours()
min = now.getMinutes()
let sec = now.getSeconds()
alert(hour + ':' + min + ':' + sec)


let variable = 11
alert(variable * variable)


var num = 47;
num += 7;
num -= 18;
num * 10;
num / 15;
alert(num);


var num = 10;
num++;
num++;
num--;
alert(num);


let arr = ['a', 'b', 'c']
alert(arr)


alert(arr[0] + '\n' + arr[1] + '\n' + arr[2])


arr = ['a', 'b', 'c', 'd']
alert(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3])


arr = [2, 5, 3, 9]
result = ((2 * 5) + (3 * 9))
alert(result)


let obj = {
    'a' : 1,
    'b' : 2,
    'c' : 3
}
alert(obj.c + '\n' + obj['c'])


obj = {
    Коля: '1000',
    Вася: '500',
    Петя: '200'
}
alert('Петя = ' + obj.Петя + '\n' + 'Коля = ' + obj.Коля)


let myData = {
    1: 'Понедельник',
    2: 'Вторик',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}
day = 3
alert(myData[day])