const log = console.log
// 滑动窗口
// 一串数组或者链表，找最什么什么样的子区间

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

// console.log(`最小子数组长度: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`);
// console.log(`最小子数组长度: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`);
// console.log(`最小子数组长度: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`);

/**
 * @param { 给定一个字符串，找出其中不超过 k 个不同字符的最长子字符串的长度。}
 * @return { while是一种多次的if语句，可以用作条件筛选，过滤掉一些不想出现的情况 }
 */

function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    log(windowStart, windowEnd)
    log(charFrequency)
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    // while是一种多次的if语句
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }
    log(windowStart, windowEnd)
    log(charFrequency)
    log()

    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

// console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
// console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
// console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);











