// 3. 无重复字符的最长子串
// 已解答
// 中等
// 相关标签
// 相关企业
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

 

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let windowStart = 0;
    let res = 0;
    let window = s[0];

    if (s.length <= 1) {
        return s.length;
    }

    for (let windowEnd = 1; windowEnd < s.length; windowEnd++) {
        const cur = s[windowEnd];
        const index = window.indexOf(cur);

        if (index !== -1) {
            // 直接跳转到不重复的位置，省略了滑动的过程
            windowStart += index + 1
        }

        window = s.substr(windowStart, windowEnd - windowStart + 1);
        res = Math.max(res, window.length);
    }

    return res;
};