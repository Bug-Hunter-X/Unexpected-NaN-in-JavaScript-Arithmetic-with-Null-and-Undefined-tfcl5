function foo(a, b) {
  // Using optional chaining and nullish coalescing
  a = a ?? 0; // Sets a to 0 if it's null or undefined
  b = b ?? 0; // Sets b to 0 if it's null or undefined
  return a + b;
}

console.log(foo(undefined, 5)); // 5
console.log(foo(null, 5)); // 5
console.log(foo(null, undefined)); // 0