// // Області видімості : глобалні, блочні (і функції)
// // в глобальній області
// const value1 = 5
// if (true) {
//    // console.log('Block scope', value1);
    
// }
// // console.log('Global scope', value1);

// // в блочній області
// const value2 = 10

// if (true) {
//     const value2 = 20
//     //console.log('Block scope', value2 * value1);
    
    
// }
// //console.log('Global scope', value2);
// const global = 'global';

// if (true) {
//   const blockA = 'block A';

//   // Видим глобальную + локальную A
//   console.log(global); // 'global'
//   console.log(blockA); // block A

//   /*
//    * Переменные blockB и blockC не найдены в доступных областях видимости.
//    * Будет ошибка обращения к переменной.
//    */
// //   console.log(blockB); // ReferenceError: blockB is not defined
// //   console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const blockB = 'block B';

//     // Видим глобальную + внешнюю A + локальную B
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B

//     /*
//      * Переменная blockC не найдена в доступных областях видимости.
//      * Будет ошибка обращения к переменной.
//      */
//     // console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = 'block C';

//   // Видим глобальную + локальную C
//   console.log(global); // global
//   console.log(blockC); // block C

//   /*
//    * Переменные blockA и blockB не найдены в доступных областях видимости.
//    * Будет ошибка обращения к переменной.
//    */
// //   console.log(blockA); // ReferenceError: blockA is not defined
// //   console.log(blockB); // ReferenceError: blockB is not defined
// }

// // Видим только глобальную
// console.log(global); // global

// /*
//  * Переменные blockA, blockB и blockC не найдены в доступных областях видимости.
//  * Будет ошибка обращения к переменной.
//  */
// // console.log(blockA); // ReferenceError: blockA is not defined
// // console.log(blockB); // ReferenceError: blockB is not defined
// // console.log(blockC); // ReferenceError: blockC is not defined

// // Цикли for, while, do..while
// // while 
// // лічильник
// let counter = 0

// while (counter < 10) {
//     console.log("counter", counter);
// counter +=1    
// }
// // TODO запонити всі місця в театрі кліентамі
// let clientCounter = 18
// const maxClients = 25

// while (clientCounter <= maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1
// }

// // do....while  

// // let password = ''

// // do {
// //     password = prompt("Введіть пароль довже ніж 4 символа!!")
// // } while (password.length < 5);

// // console.log("Пароль", password);

// // for - класичний 
// // for (initialization; condition; post-expression) {
//     // statements
// //  }
 
// // for (let index = 0; index < array.length; index++) {
   
// // }

// // приклад лічильникa

// // for (let i = 1; i <= 10; i+=1) {
// //   console.log(i);   
// // }

// const max = 20

// for (let i = 0; i < max; i+=1) {
   
//     console.log(i);
    
// }

// // break - закінчити після чогось
// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
//    if (i === 5) {
//     console.log('Дойшли до 6ї ітерації і зупинились');
//     break
//    }
    
// }
// continue - зупиняє не весь цикл, а конкретний цикл

// const num = 10
// for (let i = 0; i < num; i+=1) {
//     if (i % 2 === 0) {
//         continue
//     }
//     console.log('Нечетні', i);
    
// }


//TODO: № 1  на while ===================================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50
// let number = 0
// while (number <= 50) {
//     console.log("number", number);
// number +=1    
// }
//TODO: № 2 на for ===================================
//За допомогою циклу for додайте всі парні числа від min до max
// let min= 0;
// let maxX = 10;
// let total= 0;
// for (let a = min; a < maxX; a+=1) {
//     if ( a % 2 === 0 ) {
//         console.log('четні', a);
//         total += a;
//         continue
//     }
//     console.log('Нечетні', a);
// }
// for (let a = min; a < maxX; a+=1) {
//     if ( a % 2 !== 0 ) {
//         console.log('Noчетні', a);
//         continue
//     }
//     total += a;
//     console.log('четні', a);
// }

// console.log(total);

//TODO: № 3 на for =====================================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
// можна з 10 до 0 😉
const min = 0;
const max = 10;
let total = 0;

for (let i = max; i >= min ; i-=1) {
    console.log(i);
    if (i % 2 === 0) {
        console.log("Парні", i);
        total += i;
        continue;
    }
    console.log(total);
}
