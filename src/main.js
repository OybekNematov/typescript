"use strict";
function identity(age) {
    return age;
}
// cosnt myHobbies = identity<string[]>(["suzish"," kitob Oqish", "dam olish"]);
// function findMaxE1<T extends string | number>(arr: T[]): T | null {
//     if (arr.length) {
//         let maxE1: T = arr[0]; // maxE1 o'zgaruvchisini birinchi element bilan boshlaymiz
//         for (const item of arr) {
//             if (item > maxE1) { // Agar yangi element maxE1'dan katta bo'lsa, uni yangilaymiz
//                 maxE1 = item;
//             }
//         }
//         return maxE1; // Eng katta elementni qaytaramiz
//     }
//     return null; // Agar massiv bo'sh bo'lsa, null qaytariladi
// }
// ikkita turli xil objectlar qabul qilib ularni qoshilgan qiymatini qaytaruvchi generic funksiya yozing
// function mergeObjects<T extends object, T1 extends object>(obj1: T, obj2: T1): T & T1 {
//     // Ikkala obyektni birlashtirish
//     return { ...obj1, ...obj2 }; 
// }
// const person = { name: "John", age: 30 };
// const job = { title: "Developer", salary: 5000 };
// const merged = mergeObjects(person, job);
// console.log(merged);
const myCar = {
    id: 45,
    vehicles: 4,
    speed: 220,
};
