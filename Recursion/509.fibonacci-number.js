function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}
// console.time("fib(40)");
// console.log("fib(40) =", fib(40));
// console.timeEnd("fib(40)");
// -------------------------- Example Ends Here --------------------------

const cache = {};

function memoizedFib(n) {
  if (n in cache) {
    console.log(`🔁 Fetching from cache: fib(${n}) = ${cache[n]}`);
    return cache[n];
  }

  if (n <= 1) {
    console.log(`🧮 Base case: fib(${n}) = ${n}`);
    return n;
  }

  console.log(`⚙️ Computing fib(${n})`);
  cache[n] = memoizedFib(n - 1) + memoizedFib(n - 2);
  console.log(`✅ Storing in cache: fib(${n}) = ${cache[n]}`);
  return cache[n];
}

function showCache() {
  console.log("📦 Current cache contents:");
  console.log(cache);
  console.log("───────────────────────────\n");
}

console.time("fib(20)");
console.log("fib(20) =", memoizedFib(20));
console.timeEnd("fib(20)");
showCache();

console.log("\n\n\n");

console.time("fib(25)");
console.log("fib(25) =", memoizedFib(25));
console.timeEnd("fib(25)");
showCache();

console.log("\n\n\n");

console.time("fib(15)");
console.log("fib(15) =", memoizedFib(15));
console.timeEnd("fib(15)");
showCache();
