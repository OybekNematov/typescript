// function identity <T>(age: T): T {
//     return age;
// }






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



// const myCar: Car <number> = {
//     id: 45,
//     vehicles: 4,
//     speed: 220,
// };


// interface Demo <KEY, VALUE> {
//     key: KEY
//     value: VALUE,
// }




// let myHome = {
//     address: "fdsadsa",
//     home: 58,
// }





// function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }
// const car = {
//     brand: "BMW",
//     yil: 2020,
//     speed: 430,
// };

// const brandValue = getPropertyValue(car, "brand");
// console.log(brandValue); 

// const yearValue = getPropertyValue(car, "yil");
// console.log(yearValue); 








// ----------------------------------------------------------------AMALIYOT----------------------------------------------------------------







// Fibonacci ketma-ketligini chiqarish funksiyasi
function fibonacci(n: number): number[] {
    let fib: number[] = [0, 1];  // Boshlang'ich qiymatlar: 0 va 1
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Keyingi qiymatlarni hisoblash
    }
    return fib;
}

// Foydalanuvchidan n qiymatini olish
let n = parseInt(prompt("n sonini kiriting:") || "0", 10);

// Agar foydalanuvchi 2 dan kichik son kiritsa, tegishli javob beriladi
if (n <= 0) {
    console.log("n musbat son bo'lishi kerak.");
} else {
    console.log(`Fibonacci ketma-ketligi (${n} songacha):`);
    console.log(fibonacci(n));  // Ketma-ketlikni chiqarish
}

