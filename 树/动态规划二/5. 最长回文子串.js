// 给你一个字符串 s，找到 s 中最长的回文子串。

// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

 

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    

};



// async function demo (str = '') {
//     const len = str.length;
//     if (len < 2) {
//         return str;
//     }
    
//     let dp = new Array(len).fill(new Array(len).fill(0));
//     dp = JSON.parse(JSON.stringify(dp));

//     let maxLen = 0;
//     let begin = 0;

//     for(let i = 0; i < len; i++) {
//         dp[i][i] = 1;
//         console.log()
//     }

//     // 枚举长度
//     for(let L = 2; L < len; L++){
//         // 固定长度后，枚举起始点
//         for(let i = 0; i < len; i ++) {
//             const j = L + i - 1;

//             if(j > len) break;

//             if (str[i] === str[j]) {
//                 // 边界情况
//                 if (j - i < 3) {
//                     dp[i][j] = 1;
//                 } else {
//                     console.log(i, j)
//                     dp[i][j] = dp[i + 1][j - 1];
//                 }
//             } else {
//                 dp[i][j] = 0;
//             }

            

//             if (dp[i][j] && j - i + 1 > maxLen) {
//                 maxLen = j - i + 1;
//                 begin = i;
//             }

//             dp.forEach(item => console.log(item.toString()))
//             console.log(i, j, str.substring(i, j))

//         }
//     }

//     return str.substring(begin, begin + maxLen);
// }


// console.log(demo('asdfghjklkjhgfdsa'));




