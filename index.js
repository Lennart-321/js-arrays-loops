// 1. Create an empty array and fill it with different elements using the push-method. Log it to the console.
let array1 = [];
for (let i = 0; i < 5; i++) {
  array1.push(i + 1);
  array1.push("Nummer " + (i + 1));
}
console.log(array1);

// 2. Create an array containing arbitrary numbers. Loop throught that array and multiply each element with 3 and log that to the console.
let array2 = [17, 120, 33, 97, -123, 0, 25];
for (let i = 0; i < array2.length; i++) {
  array2[i] *= 3;
}
console.log(array2);

// 3. Create an array with numbers, and one empty array.
// Loop through the array with numbers and do an if check in each iteration.
// If that number is bigger then a specific number, 5 for example, add that number to the empty array.
// Log the new array to the console in the end.
// Remember to use the indexes to get the elements from the array with numbers.
let array3 = [17, 120, 33, 97, -123, 0, 25];
let array3_2 = [];
for (let i = 0; i < array3.length; i++) {
  if (array3[i] > 5) array3_2.push(array3[i]);
}
console.log(array3_2);

// 4. Create an array with random numbers. Loop through the array and add them all together.
// Log the total sum of all the elements to the console.
// hint - You will need a variable here that store the sum as you iterate over the array.
let array4 = [17, 120, 33, 97, -123, 0, 25];
let sum4 = 0;
array4.forEach((m) => {
  sum4 += m;
});
console.log(sum4);

// 5. Create an array with some elements. Now search for a specific element while you are looping through the array.
// If you find the element you are searching for, log it to the console.
let array5 = [17, 120, 33, 97, -123, 0, 25];
array4.forEach((m) => {
  if (m === 57321873) console.log(m);
});

// 6. Create an array with some elements, remove the last element **WITHOUT** using `pop()`.
let array6 = [17, 120, 33, 97, -123, 0, 25];
array6.splice(-1);

// 7. Create an array with 10 different numbers. Find the biggest number in the array and log it to the console.
// `hint` - You will need a variable that holds the current biggest number.
let array7 = [17, 120, 33, 97, -123, 0, 25, -1, -77, 3.14999];
console.log(Math.max(...array7));

// 8. Create an array with some elements and an empty array. Using a loop, copy the content of the first array to the empty array.
let array8 = [17, 120, 33, 97, -123, 0, 25, -1, -77, 3.14999];
let array8_2 = [];
for (m of array8) array8_2.push(m);

// 9. Create an array with some elements. Use a loop to empty the entire array so there are no elements left in the end.
let array9 = [17, 120, 33, 97, -123, 0, 25, -1, -77, 3.14999];
while (array9.length > 0) array9.pop();
