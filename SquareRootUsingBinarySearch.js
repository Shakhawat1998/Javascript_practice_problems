function sqrt(n) {
  if (n < 2) {
    return n;
  }
  let low = 1, high = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid === n) {
      return mid;
    } else if (mid * mid < n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}

let n = 25;
console.log(sqrt(n)); 