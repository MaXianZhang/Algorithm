/**
 * @param {给定一个正数数组和一个正数数组“ s” ，找出和大于或等于“ s”的最小连续子数组的长度。 如果不存在这样的子数组，则返回0。}
 * @return { 长度开始改变 }
 * @return { 以尾部为准，尽可能让头部前进，达到尽可能缩小的效果 }
 */
function smallest_subarray_with_given_sum(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  // 很好的设计，因为要维护两个索引，尾索引用for循环维护，开始的索引单独维护，在for循环内维护
  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // 尽可能缩小窗口
    while (windowSum >= s) {
      // 一句经典的代码
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }

  return minLength;
}

// console.log(`最小子数组长度: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`);
// console.log(`最小子数组长度: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`);
// console.log(`最小子数组长度: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`);
