
/*

Треугольник в цикле

Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:


#
##
###
####
#####
######
#######


*/


//Решение


// for (let line = "#"; line.length < 8; line += "#")
//     console.log(line);



/*

FizzBuzz

Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5(но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.


*/

// Решение:



// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
// }



/*

Шахматная доска
Напишите программу, создающую строку, содержащую решётку 8х8, 
в которой линии разделяются символами новой строки. 
На каждой позиции либо пробел, либо #. 
В результате должна получиться шахматная доска.


# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #


*/



// Решение:


// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//     for (let x = 0; x < size; x++) {
//         if ((x + y) % 2 == 0) {
//             board += " ";
//         } else {
//             board += "#";
//         }
//     }
//     board += "\n";
// }

// console.log(board);