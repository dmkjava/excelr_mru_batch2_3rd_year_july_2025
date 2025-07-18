var nos = [10, 20, 30, 40]
console.log(nos);

// how to add one element that is 50 at end of it.
nos.push(50)
console.log(nos);
// using with spred operator 
nos = [...nos, 60];
console.log(nos);

// adding the element at beginning using unshift
nos.unshift(70);
console.log(nos);

// adding the element at beginning using spred
nos = [80, ...nos];
console.log(nos);
