let arr = [1, 2, 3, 4, 5, 6, 7];

var reset = function () {
  arr = [1, 2, 3, 4, 5, 6, 7];
};

// 1. Reverse :: Directly changes the array
arr.reverse();
console.log(arr);

reset();

// 2. Sort :: Directly changes the array
arr.sort((a, b) => b - a);
console.log(arr);

reset();

// 3. Map
arr = arr.map((x) => x * 2);
console.log(arr);

reset();

//4. Fill :: Directly changes the array
arr.fill(-1);
console.log(arr);

reset();

//5. Joins and returns a string
let str = arr.join('');
console.log(str);
reset();

//6. Filter
arr = arr.filter((x) => x > 3);
console.log(arr);
reset();

//7. Reduce
// Finding sum of all the values
let sum = arr.reduce((curr, next) => {
  console.log(curr, next);
  return curr + next;
});
console.log(sum);
reset();

//8. For Each
arr = arr.forEach((x) => (x = x * 2));
console.log(arr);
reset();

//9. For In
for (z in arr) {
  // prints index in this case
  console.log(z);
}
reset();

//10. concat
arr = arr.concat([9, 10, 11]);
console.log(arr);

//11.every
arr[3] = 'John';
let isCondition = arr.every((x) => typeof x === 'number');
console.log(isCondition);
reset();

//11.some
arr[3] = 'John';
isCondition = arr.some((x) => typeof x === 'string');
console.log(isCondition);
reset();

//12.includes
arr[3] = 'John';
isCondition = arr.includes('John');
console.log(isCondition);
reset();

//13. find : returns undefined if not found
arr[3] = 'John';
arr[5] = 'John';
let elem = arr.find((x, i) => x === 'Joh1');
console.log(elem);
reset();

//14. find index
arr[3] = 'John';
arr[5] = 'John';
let elemIndex = arr.findIndex((i) => i === 'John');
console.log(elemIndex);
reset();

//14. slice :: doesnot change the original array
let slicedElements = arr.slice(1, 4);
console.log(slicedElements);
reset();

//15. splice :: Change the original array
arr.splice(1, 4);
console.log(arr);
reset();
