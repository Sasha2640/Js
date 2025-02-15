// ? Процедурне програмування - набір не звязаних явно функції і змінних
// ? для зберігання та обрботки інфо (тісно звязаний код)

const base = 30000;
const time = 10;
const rate = 230;

const getWave = (base, time, rate) => {
  return base * time * rate;
};
getWave(base, time, rate);

// ? Обьектно-оріентоване програмування  - методологіяю основанна на
// ? представленні програми в виді сукупності обьектів, кожний з яких
// ? має данні (властивості) та методи для взаїмодії з ними

const employee = {
  baseSalary: 30000,
  time: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.time + this.rate;
  },
};
employee.getWage();

//! Класс - спосіб опису сутності, опреділяюще стан та поведінку
//! залежне од цього стануб а так же праввила для взаїмодії з данною сутністю

class Auto {}

//! Обькт (єкземпляр) - це окремий представник класса, має конкретний стан
//! та поведінкуб повністю определяємо классомю

const bmw = Object.create(Auto);

//! Інтерфейс - це набір властивостей і методів класу,
//! доступних для використання при роботі з єкземпляром (Обьектом)

//! Парадігми : інкапсуляція, абстрація, наслідовання, поліморфізм

//? Інкапсуляція - властивості системи, дозволяющіе обьеднати данні та
//? методи, працючі з ними, в класі та сховати деталі реалізації від
//? користувача

//? Абстрація - спосіб виділити набір значних потрібних характеристик
//? обьекта виключая з уваши незначні.

//? Наслідування - властивість системи, дає описати новий класс на базі
//? вже існуючого, з частично або повністю взятим функціоналом.

//? Поліморфізм - властивість системи, дозволяє використати обьекти з
//? одинаковим інтерфейсом без інформації о типі та внутрішний структурі.
