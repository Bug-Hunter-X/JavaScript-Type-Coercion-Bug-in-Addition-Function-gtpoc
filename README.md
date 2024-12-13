# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug in a JavaScript function related to type coercion during addition. The `foo` function is intended to add two numbers but handles `null` inputs incorrectly.

## Bug Description

The bug arises when using the strict equality operator (`===`) in combination with type coercion.  While it correctly handles `null` inputs, it fails when one of the inputs is a value that can be coerced to a number (e.g., strings representing numbers).

## Solution

The solution involves explicitly checking for and handling the different data types to ensure that the addition operation is performed only on numbers.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`. 
3. Run `node bug.js` in your terminal to observe the bug.
4. Open `bugSolution.js` and run `node bugSolution.js` to observe the corrected behavior.
