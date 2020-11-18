str1 = 'Привет, ', str2 = 'Мир!'
alert(str1 + str2)


name = 'Егор'
alert(str1 + name + '!')


age = 19
alert('Мне ' + age + ' лет!')


name = prompt('Введите Ваше имя')
alert('Ваше имя ' + name)


num = prompt('Введите число')
alert(num * num)


str = 'abcde'
alert(str.split(""))

num = 12345
arr = num.toString().split('')
sum = 0
for (let i = 0; i < arr.length; i++)
    sum += parseInt(arr[i])
alert(sum)