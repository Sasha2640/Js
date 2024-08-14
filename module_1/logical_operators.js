// Запомните 6 ложных (falsy) значений, приводящихся к false в логическом преобразовании:
//  0, NaN, null, undefined, пустая строка: "" или '', false.
//  Абсолютно все остальное приводится к true.

// Логічне і - > && - приводить операнди к булю, щоб він повернув true треба
// щоб обидва операнди були правдіві, якщо один з них fasle то поверне fasle

// const num = 20;
// const result = num > 10 && num < 30;
// console.log(result); // true


// const num = 40;
// const result = num > 10 && num < 30;
// console.log(result); // false

// Логічне АБO || - як що один з операндів повертає правду, то він поверне правду
// не правду він поверне тоді, коли, всі операнді мають повернути не правду

// const num = 5;
// const result = num < 10  num > 30;
// console.log(result); // true

// const num = 40;
// const result = num < 10  num > 30;
// console.log(result); // true

// const num = 20;
// const result = num < 10 || num > 30;
// console.log(result); // false
// console.log(!true); // false
// console.log(!false); // true
// console.log(!1); // false
// console.log(!0); // true

    //if -якщо результат буде false то умова закінчиться
  const priklad = 5;
//   if (priklad === 5) {
//   alert(Your number is 5!);
//   }
    //if....else -якщо результата буде false використовується інша умова
// if (priklad === 5) {
//     alert(Your number is 5!)
// } else {
//     alert(Виберіть інше число!);
// }
    //else...if -є юагато варіантів якщо 1 не підхолит виконується друга і т.д
// if (priklad ===5) {
 //     alert(Your number is 5!)
 // }elseif (priklad ===4){
//     alert(Виберіть інше число!);
 // }else if(priklad ===15){
 //     alert(Виберіть інше число!);
//  }
    //switch -підбирається одна з багатьох умов
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

    //TODO: № 1 if...else ================================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
const number=19;
if (number=== 10) {
    console.log("Вірно!");
} else {
    console.log("Невірно");
}
//     //TODO: № 1.1 тернарний оператор ==============================================
// // Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно' через тернарник
// number ===10?  console.log("Вірно!") : console.log("Невірно");
//     //TODO: № 2  if...else =========================================================================================
// //Використовуючи конструкцію if...else,
// //напишіть код, який запитуватиме:
// //"Яка офіційна назва JavaScript?"
// //Якщо користувач вводить "ECMAScript",
// // показати через alert: "Вірно!"
// //інакше відобразити: "Не знаєте? ECMAScript!"
    // let quest=prompt("Яка офіційна назва JavaScript?");
    // console.log(quest);
    // if (quest === "ECMAScript") {
    //     alert("Вірно");    
    // } else {
    //     alert("Не знаєте? ECMAScript!");
   // }
    //  TODO: № 3 на if...else if =============================================== 
//У змінній min лежить число від 0 до 59. Визначте у котру чверть години
//Попадає це число (у першу, другу, третю або четверту).
const min= 61;
        if (min<=15) {
        console.log("1 чверть");       
        }
         else if (min >=15 && min < 30) {
            console.log("2 чверть");          
        } 
        else if (min >=30 && min < 45) {
            console.log("3 чверть");  
        }
        else if (min >=45 && min < 59) {
            console.log("4 чверть");  
        }
        else{
            console.log("Такої чверті немає");
        }
    
        //TODO: № 4 на switch ===========================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
let num = 1;
let result;
switch (num) {
    case 1 : result = "Зима"; break;
    case 2 : result = "Весна"; break;
    case 3 : result = "Літо"; break;
    case 4 : result = "Осінь"; break;
default: "Введіть число";
 }
 console.log(result);

    //TODO: додаткове) ==========================
// Напишіть if..else, що відповідає наступному switch:
// const browser = "Opera"
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
const browser = "Chrome";
if (browser === "Edge") {
    alert( "You've got the Edge!");
} else if (browser === "Chrome" || browser ==="Firefox"  || browser ==="Safari"  || browser ==="Opera"){
    alert( 'Okay we support these browsers too' );
}else {
    alert( 'We hope that this page looks ok!' );
}