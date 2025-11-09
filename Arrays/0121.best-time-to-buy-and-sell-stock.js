function maxProfit (prices) {

  let minPrice = prices[0];
  let maxProfit = 0;
  let buyDay = 0;
  let sellDay = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentProfit = prices[i] - minPrice;

    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
      sellDay = i;
    }

    if (prices[i] < minPrice) {
      minPrice = prices[i];
      buyDay = i;
    }
  }

  if (maxProfit === 0) {
    return `In this case, no transactions are done and the max profit = 0.`;
  }

  return `Buy on day ${buyDay + 1} (price = ${prices[buyDay]}) and sell on day ${sellDay + 1} (price = ${prices[sellDay]}), profit = ${maxProfit}.`;
}

console.log(maxProfit([7, 1, 5, 3, 6, 6]));
console.log(maxProfit([7,6,4,3,1]));

// -------------------------- Method 2: two-pointer solution --------------------------

function maxProfit1(prices) {
  let l = 0; // left pointer (buy)
  let r = 1; // right pointer (sell)
  let profit = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      const diff = prices[r] - prices[l];
      profit = Math.max(profit, diff);
    } else {
      l = r; // move left pointer if current price is higher
    }
    r += 1; // always move right pointer
  }

  return profit;
}
