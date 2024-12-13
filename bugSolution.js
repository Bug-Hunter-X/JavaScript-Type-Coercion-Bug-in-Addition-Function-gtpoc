function foo(a, b) {
  //Explicit type checking
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return null;
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo('1', 2)); // Output: 3
console.log(foo(1, '2')); // Output: 3