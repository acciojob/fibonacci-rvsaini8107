
function fibonacci(num) {
// your code here
  if (num == 0) return 0;
  if (num == 1) return 1;

  let prev1 = 1;
  let prev2 = 0;
  let fib = 0;

  for (let i = 2; i <= num; i++) {
    fib = prev1 + prev2;
    prev2 = prev1;
    prev1 = fib;
  }

  return fib;
	
}

module.exports = fibonacci;
