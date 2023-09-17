// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

 

// 示例 1：

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// 示例 2：

// 输入：target = 4, nums = [1,4,4]
// 输出：1
// 示例 3：

// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(target, nums) {
    let windowSum = 0,
        minLength = Infinity,
        windowStart = 0;

    for (windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd];
        // 尽可能缩小窗口
        while (windowSum >= target) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= nums[windowStart];
            windowStart += 1;
        }
    }

    if (minLength === Infinity) {
        return 0;
    }

    return minLength;
}

console.log(minSubArrayLen(7, [2, 1, 5, 2, 3, 2]));
console.log(minSubArrayLen(7, [2, 1, 5, 2, 8]));
console.log(minSubArrayLen(8, [3, 4, 1, 1, 6]));
