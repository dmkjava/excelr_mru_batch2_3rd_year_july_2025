
var nos = [10, 20, 30, 40]
// this is the traditional approach
let firstElement = nos[0];
let secondElement = nos[1]
console.log(firstElement, secondElement);

console.log('first and second');
let [first, second] = nos;
console.log(first, second);
console.log("first and third");
let [first1, ,second1] = nos;
console.log(first1, second1);
console.log("first and fourth");
let [first2, , ,second2] = nos;
console.log(first2, second2);
console.log("second and third");
let [, first3, second3] = nos;
console.log(first3, second3);
console.log("third and fourth");
let [ , , first4, second4] = nos;
console.log(first4, second4);

