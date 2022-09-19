// Создайте функцию getQuadCssProps(props), которая в качестве аргумента принимает значение css свойства и возвращает квадрат этого числа по следующему примеру ниже. 
// Если в результате преобразования числа вычисляется NaN - необходимо вернуть строку ‘none’

// Пример:
// console.log(getQuadCssProps(‘5px’))
// console.log(getQuadCssProps(‘px5’))

// Результат: 
// ‘25px’
// ‘none’

// Создайте функцию checkEvenChar(word), которая в качестве аргумента передает строку с произвольной длиной и реализует следующие вычисления:
// если из длины переменной word вычисляется квадратный корень (без дробной части) - функция должна возвращать ответ 1, в противном случае - 0 

// Пример: 
// console.log(checkEvenChar(‘меню’))

// Результат: 1

// Создайте функцию getRandomChar(word), которая в качестве аргумента передает строку произвольной длины и возвращает случайный символ строки. 

// Примечание: 
// В коде предусмотреть возможность вывода последнего символа в том числе. 
// Убедиться в том, что функция не возвращает undefined (проверить выполнение несколько раз)

// Пример: 
// console.log(getRandomChar(‘меню’))

// Результат: ‘н’

// Напишите функцию getRandomChars(word,n), которая в качестве аргумента принимает строку и число. Реализуйте функционал, который вернет в результате выполнения функции n рандомных символом строки word.
	
// 		Пример: 
// console.log(getRandomChars(‘меню’, 3))
// console.log(getRandomChars(‘меню’, 5))

// Результат: 
// ‘нме’
// ‘енюмн’

//--------------------------------------------------------------------------------------------------------

//1 Задание
let getQuadCssProps = function (props) {
    let result = ''
    result = props ** 2
    return result + 'px'
}
console.log(getQuadCssProps(parseInt('8px')))

//2 Задание
let checkEvenChar = function (word) {
    if (Math.sqrt(word.length) % 2 == 0) {
        return 1
    }
    else {
        return 0
    }
}
console.log(checkEvenChar('мышь'))

//3 Задание
let getRandomChar = function (word) {
    let result = word.charAt(Math.floor(Math.random() * word.length))
    return result
}
console.log (getRandomChar('меню'))

//4 Задание
let getRandomChars = function (word,n) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        result += word.charAt(Math.floor(Math.random() * word.length))
    }
    return result
}
console.log (getRandomChars('слово', 2))