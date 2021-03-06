/*

Сумма диапазона

Напишите функцию range, принимающую два аргумента – начало и конец диапазона – и возвращающую массив, который содержит все числа из него, включая начальное и конечное.
Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.
В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива.Если он не задан, шаг равен единице.
Вызов функции range(1, 10, 2) должен будет вернуть[1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает[5, 4, 3, 2].

Примеры: 

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

*/


// const range = (start, end, step = 1) => {
//     let arr = [];

//     if (step > 0) {
//         for (let i = start; i <= end; i += step) arr.push(i);
//     }
//     else {
//         for (let i = start; i >= end; i += step) arr.push(i);
//     }

//     return arr;
// }


// const sum = (arr) => {
    
//     let total = 0;
//     for (let i of arr) {
//         total += i;
//     }

//     return total;
// }

// // // reduce version 2:
// // const sum = (arr) => {
// //     return arr.reduce((a, b) => a + b);
// // }

// console.log(sum(range(1, 10)));

// console.log(range(1, 10));

// console.log(range(5, 2, -1));












/*
Обращаем вспять массив
У массивов есть метод reverse, меняющий порядок элементов в массиве на обратный. 
В качестве упражнения напишите две функции, reverseArray и reverseArrayInPlace. 
Первая получает массив как аргумент и выдаёт новый массив – с обратным порядком элементов. 
Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в 
том массиве, который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.
Если иметь в виду побочные эффекты и чистые функции из предыдущей главы, какой из вариантов 
вам кажется более полезным? Какой более эффективным?



console.log(reverseArray(["A", "B", "C"]));

// → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// → [5, 4, 3, 2, 1]

*/

// const reverseArray = (arr) => {
//   const newArr = [];

//   for (i of arr) {
//     newArr.unshift(i);
//   }
//   return newArr;
// }



// const reverseArray2 = (arr) => {
//   const newArr = [];

//   for (i = arr.length-1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }


// console.log(reverseArray(["A", "B", "C"]));



// const reverseArrayInPlace = (arr) => {

//   for (let i = 0; i < Math.floor(arr.length/2); i++) {
//     let swap = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = swap;
//   }
// }

// const arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

// // → [5, 4, 3, 2, 1]




/*
Список

Объекты могут быть использованы для построения различных структур данных.
Часто встречающаяся структура – список(не путайте с массивом).
Список – связанный набор объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п.


var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};


Списки удобны тем, что они могут делиться частью своей структуры. Например, можно сделать два списка, {value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее объявленную переменную. Это два независимых списка, при этом у них есть общая структура list, которая включает три последних элемента каждого из них. Кроме того, оригинальный список также сохраняет свои свойства как отдельный список из трёх элементов.
Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], а также функцию listToArray, которая создаёт массив из списка. Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, и функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке или же undefined в случае отсутствия такого элемента.
Если ваша версия nth не рекурсивна, тогда напишите её рекурсивную версию.


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

*/



// const arrayToList = (array) => {
//   let list = null;
//   for (let i = array.length - 1; i >= 0; i--) {
    
//     list = { value: array[i], rest: list };
//     // console.log(list);
//   }
//   return list;
// }


// console.log(arrayToList([10, 20, 30]));


// function listToArray(list) {
//   let array = [];
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }
//   return array;
// }


// function prepend(value, list) {
//   return { value, rest: list };
// }


// function nth(list, n) {
//   if (!list) return undefined;
//   else if (n == 0) return list.value;
//   else return nth(list.rest, n - 1);
// }



// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20



/*

Глубокое сравнение

Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект.Но иногда полезно было бы сравнить объекты по содержимому.
Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это два одинаковых значения или это объекты, свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual.
Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому, используйте оператор typeof.Если он выдаёт "object" для обеих величин, значит нужно делать глубокое сравнение.Примите во внимание одно дурацкое исключение, существующее по историческим причинам: typeof null тоже возвращает "object".


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


*/




// function deepEqual(a, b) {
//   if (a === b) return true;

//   if (a == null || typeof a != "object" ||
//     b == null || typeof b != "object") return false;

//   let keysA = Object.keys(a), keysB = Object.keys(b);

//   // console.log(keysA, keysB)

//   if (keysA.length != keysB.length) return false;

//   for (let key of keysA) {
//     if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//   }

//   return true;
// }

// let obj = { here: { is: "an" }, object: 2 };
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// // → false
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// // → true