/* Задача 1 */

let str = "#";
while (str.length<=7){
    console.log(str + "\n");
    str+="#";
}

/* Задача 2 */

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0)
      output += "Fizz";
    if (n % 5 == 0)
      output += "Buzz";
    console.log(output || n);
}

/* Задача 3 */

let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);

/* Задача 4 */

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}
console.log(min(5, 2))

/* Задача 5 */

function countChar(string, ch) {
    var counted = 0;
    for (var i = 0; i < string.length; i++)
        if (string.charAt(i) == ch)
        counted += 1;
    return counted;
}
console.log(countChar("ihwhehudhhh", "h"));

/* Задача 6 */

function range(start, end, step) {
    if (step == null) step = 1;
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step)
        array.push(i);
    } else {
      for (let i = start; i >= end; i += step)
        array.push(i);
    }
    return array;
  }
  function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++)
      total += array[i];
    return total;
  }
  console.log(sum(range(1, 10)));
  console.log(range(5, 2, -1));
 
/* Задача 6 */
function reverseArray(array) {
    var output = [];
    for (var i = array.length - 1; i >= 0; i--)
      output.push(array[i]);
    return output;
  }
  
function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

  console.log(reverseArray(["A", "B", "C"]));
  var arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
