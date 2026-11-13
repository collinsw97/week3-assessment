// Test 3: Number Explorer

// 1. Numbers from 1 to 20
console.log("Numbers 1 to 20:");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Even numbers between 1 and 20
console.log("Even numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. Odd numbers between 1 and 20
console.log("Odd numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 4. Sum of numbers from 1 to 20
let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
}
console.log("Sum of numbers from 1 to 20:", sum);

// 5. Numbers from 20 down to 1
console.log("Numbers 20 down to 1:");
for (let i = 20; i >= 1; i--) {
  console.log(i);
}
