/**
 * @param { 给定一个字符串，找出其中不超过 k 个不同字符的最长子字符串的长度。}
 * @return { while是一种多次的if语句，可以用作条件筛选，过滤掉一些不想出现的情况 }
 */


function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // 伸展窗口 [window_start, window_end]
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

    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

// console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
// console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
// console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);
