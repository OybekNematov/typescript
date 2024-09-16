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



//  1-masala ---------------------------------------------------



// function fibonacci(n: number): number[] {
//     let fib: number[] = [0, 1];  
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]; 
//     }
//     return fib;
// }
// let n = parseInt(prompt("n sonini kiriting:") || "0", 10);
// if (n <= 0) {
//     console.log("n musbat son bo'lishi kerak.");
// } else {
//     console.log(`Fibonacci ketma-ketligi (${n} songacha):`);
//     console.log(fibonacci(n)); 
// }




// 2-masala ----------------------------------------------------------------


// type Person = {
//     ism: string;     
//     yosh: number;    
//     kasb: string;   
// };

// let shaxs: Person = {
//     ism: "Oybek",
//     yosh: 19,
//     kasb: "Dasturchi"
// };

// console.log(`Ismi: ${shaxs.ism}`);
// console.log(`Yoshi: ${shaxs.yosh}`);
// console.log(`Kasbi: ${shaxs.kasb}`);




// 3-massala ----------------------------------------------------------------



// interface Car {
//     nomi: string;
//     modeli: string;
//     yili: number;
//     speed: number;   
// }

// let mashina: Car = {
//     nomi: "BMW",    
//     modeli: "M8",
//     yili: 2024,
//     speed: 486         
// };

// console.log(`Mashina nomi: ${mashina.nomi}`);
// console.log(`Modeli: ${mashina.modeli}`);
// console.log(`Yili: ${mashina.yili}`);
// console.log(`speed: ${mashina.speed}`)



// 4-massala ----------------------------------------------------------------


// type Yigindilar = (a: number, b: number) => number;
// const yigindi: Yigindilar = (a: number, b: number): number => {
//     return a + b;
// };

// let natija = yigindi(5, 7);  
// console.log(`Yigindisi: ${natija}`);


// 5-massala ----------------------------------------------------------------


interface Juftlik<T, T1> {
    Bir: T;  
    Ikki: T1;  
}


let juftlik: Juftlik<string, number> = {
    Bir: "Yosh",
    Ikki: 25
};

console.log(`Birinchi: ${juftlik.Bir}, Ikkinchi: ${juftlik.Ikki}`);


