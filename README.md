# JavaScript NaN Bug: Null and Undefined in Arithmetic

This repository demonstrates a common, yet subtle, bug in JavaScript related to the handling of `null` and `undefined` values in arithmetic expressions.  The loose typing nature of JavaScript can result in unexpected `NaN` (Not a Number) results.

## The Bug
The `foo` function adds two numbers. However, when either input is `undefined`, the result is `NaN`, even if the other is a valid number.  `null` is treated differently; it's coerced to 0.

## The Solution
The solution involves explicit checks for `null` and `undefined`, or employing a more robust approach using optional chaining and nullish coalescing operators.  This makes the function's behavior more predictable and avoids potential `NaN` values.