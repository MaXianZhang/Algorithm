/**
 * @param { 给定一个字符串，查找没有重复字符的最长子字符串的长度 }
 * @return { 一遍通过，连修改都没有，并且完全用的是新感悟的知识，卧槽，牛逼 }
 * @return { 但是算法的复杂度没有人家低，他字典里存的是这个字母上次出现的位置，如果再次出现，直接调到上次出现的下一位 }
 */

function non_repeat_substring(str) {
  let windowStart = 0
  let dict = {}
  let result = 0

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const tail = str[windowEnd];
    if (!dict[tail]) dict[tail] = 0
    dict[tail]++

    while (Object.keys(dict).some(item => dict[item] > 1)) {
      let head = str[windowStart]
      dict[head]--
      if (dict[head] === 0) {
        delete dict[head]
      }

      windowStart++
    }
    result = Math.max(result, windowEnd - windowStart + 1)
  }
  return result
}

function non_repeat_substring(str) {
  let windowStart = 0,
    maxLength = 0,
    charIndexMap = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (rightChar in charIndexMap) {
      // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }
    // insert the 'rightChar' into the map
    charIndexMap[str[windowEnd]] = windowEnd;
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

// console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
// console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
// console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);

/**
 * @param { 给定一个只有小写字母的字符串，如果允许用任何字母替换不超过‘ k’的字母，那么在替换之后找到最长的子字符串的长度。 }
 * @return {  }
 * @return {  }
 */


function length_of_longest_substring(str, k) {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};
  
  
  return
}
// function length_of_longest_substring(str, k) {

//   let windowStart = 0,
//     maxLength = 0,
//     maxRepeatLetterCount = 0,
//     frequencyMap = {};

//   // Try to extend the range [windowStart, windowEnd]
//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const rightChar = str[windowEnd];
//     if (!(rightChar in frequencyMap)) {
//       frequencyMap[rightChar] = 0;
//     }
//     frequencyMap[rightChar] += 1;
//     maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);

//     // Current window size is from windowStart to windowEnd, overall we have a letter which is
//     // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
//     // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
//     // if the remaining letters are more than 'k', it is the time to shrink the window as we
//     // are not allowed to replace more than 'k' letters
//     if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
//       leftChar = str[windowStart];
//       frequencyMap[leftChar] -= 1;
//       windowStart += 1;
//     }

//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }
//   return maxLength;
// }


console.log(length_of_longest_substring('aabccbb', 2));
console.log(length_of_longest_substring('abbcb', 1));
console.log(length_of_longest_substring('abccde', 1));




