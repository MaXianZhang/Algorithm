
/**
 * @param { 给定一个只有小写字母的字符串，如果允许用任何字母替换不超过‘ k’的字母，那么在替换之后找到最长相同字符的子字符串的长度。}
 * @return { substring的参数是首尾索引 }
 * @return { 模版成型，for内有个while，for控制尾部变量，while控制首部变量， 
  * 通常在while之后收集数据，因为这时候窗口经过缩放，已经满足我们的要求了
  * 可能会用到Math.min/max做记录
  * 可能要存到数组里 }
  */
 
 function length_of_longest_substring_mine(str, k) {
   let windowStart = 0,
     len = 0,
     dict = {},
     result = 0;
 
   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
     const tail = str[windowEnd];
     if(!(tail in dict)) dict[tail] = 0
     dict[tail]++
     len = windowEnd - windowStart + 1
 
     while (len - Math.max(...Object.keys(dict).map(key => dict[key])) > k) {
       const head = str[windowStart]
       dict[head]--
       len--
       windowStart++
     }
 
     result = Math.max(result, len)
   }
  
   return result;
 }
 
 function length_of_longest_substring(str, k) {
   let windowStart = 0,
     maxLength = 0,
     maxRepeatLetterCount = 0,
     frequencyMap = {};
 
   // Try to extend the range [windowStart, windowEnd]
   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
     const rightChar = str[windowEnd];
     if (!(rightChar in frequencyMap)) {
       frequencyMap[rightChar] = 0;
     }
     frequencyMap[rightChar] += 1;
     maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);
 
     // Current window size is from windowStart to windowEnd, overall we have a letter which is
     // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
     // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
     // if the remaining letters are more than 'k', it is the time to shrink the window as we
     // are not allowed to replace more than 'k' letters
     if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
       leftChar = str[windowStart];
       frequencyMap[leftChar] -= 1;
       windowStart += 1;
     }
 
     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
   }
   return maxLength;
 }
 
 console.log(length_of_longest_substring_mine('aabccbb', 2));
 console.log(length_of_longest_substring_mine('abbcb', 1));
 console.log(length_of_longest_substring_mine('abccde', 1));
 
 
 