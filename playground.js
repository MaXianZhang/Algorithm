const log = console.log


// const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
// log(`长度为K的子数组的平均值: ${result}`);

function find_averages_of_subarrays(K, arr) {
  const result = [];
  const window = arr.slice(0, K)
  let curAverages = window.reduce((a, b) => a + b)

  for (let i = 0; i < arr.length - K + 1; i++) {
    result.push(curAverages / K)
    curAverages += arr[K + i]
    curAverages -= window.shift()
    window.push(arr[K + i])
  }

  return result;
}

// const result = max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]);
// log(`连续k个子数组最大和: ${result}`);

function max_sub_array_of_size_k(K, arr) {
  let result = 0;
  const window = arr.slice(0, K)
  let curAverages = window.reduce((a, b) => a + b)

  for (let i = 0; i < arr.length - K + 1; i++) {
    if (curAverages > result) {
      result = curAverages
    }
    curAverages += arr[K + i]
    curAverages -= window.shift()
    window.push(arr[K + i])
  }

  return result;
};

// console.log(`最小子数组长度: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`);
// console.log(`最小子数组长度: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`);
// console.log(`最小子数组长度: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`);

function smallest_subarray_with_given_sum(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  // 很好的设计，因为要维护两个索引，尾索引用for循环维护，开始的索引单独维护，在for循环内维护
  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
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
















