/**
 * Function Biasa
 */
//
// function isEven(number) {
//     return number%2 === 0
// }

/**
 * 2. Function disimpan dalam Variabel
 */
 //
 // const isEven = function (number) {
 //     return number % 2 === 0
 // }

/**
 * 3. Arrow Function
 */

// jika parameter lebih darisatu harus dikurung
// const isEven = number => number % 2 === 0

// console.log(isEven(10), 10)
// console.log(isEven(7), 7)

// Parameter cuma 1 tapi berbentuk array
// const joinArray = arr => arr.join('-')

// console.log(joinArray([1,2,3,4,5,6,7,8,9]))

// Jika parameter tidak diketahui memakai ... (spred)
// const sumAll = ( ... number ) => console.log(number)
//
// sumAll(1,2,3,4,5,6,7,8,9)

// const printBioData = person => console.log(`My name Is ${person.name}, i'm ${person.age} oldo`)
// Dengan Destructring
// const printBioData = ({name, age}) => console.log(`My name Is ${name}, i'm ${age} old`)

// printBioData({ name: 'Muhammad', age: '19' })

/**
 * Conditional
 */
// const number = 90
//
// if (number > 85) {
//     console.log('Excelent')
// } else if ( number > 10 && number < 85 ) {
//     console.log('Medium')
// } else {
//     console.log('Bad');
// }

// Cara Biasa
// if (condition) {
//
// } else {
//
// }

// Cara tenary hanya satu
// const data = true
// data === true ? console.log('benar') : console.log('salah')

// Jika ada elseif
const number = 90
number > 85
    ? console.log('Excelent')
    : number > 10 && number < 85
        ? console.log('Medium')
        :console.log('Bad');
