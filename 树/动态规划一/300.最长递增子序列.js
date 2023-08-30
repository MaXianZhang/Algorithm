// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

//  
// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1
//  

// 提示：

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

var lengthOfLIS = function (nums) {
    const book = {
        '0': 1
    };

    const dp = n => {
        if (book[n]) {
            return book[n];
        }

        let best = 0;
        for (let i = 0; i < n; i++) {
            const res = dp(i);

            if (nums[n] > nums[i] && res > best) {
                best = res;
            }
        }

        book[n] = best + 1
        return book[n];
    }
    dp(nums.length - 1)

    return Math.max(...Object.values(book))
};

// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
// console.log(lengthOfLIS([0,1,0,3,2,3]))
// console.log(lengthOfLIS([7,7,7,7,7,7,7]))

// error
// console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]))

// 递推写法
// 记忆book的方式优化

// class Solution {
//     public int lengthOfLIS(int[] nums) {
//         // dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度
//         int[] dp = new int[nums.length];
//         // base case：dp 数组全都初始化为 1
//         Arrays.fill(dp, 1);

//         for (int i = 0; i < nums.length; i++) {
//             for (int j = 0; j < i; j++) {
//                 if (nums[i] > nums[j])
//                     dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }

//         int res = 0;
//         for (int i = 0; i < dp.length; i++) {
//             res = Math.max(res, dp[i]);
//         }
//         return res;
//     }
// }

// vue 3中的最长递归子序列判断操作基准
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice()
    const result = [0]
    let i, j, u, v, c
    const len = arr.length
    for (i = 0; i < len; i++) {
        const arrI = arr[i]
        if (arrI !== 0) {
            j = result[result.length - 1]
            if (arr[j] < arrI) {
                p[i] = j
                result.push(i)
                continue
            }
            u = 0
            v = result.length - 1
            while (u < v) {
                c = (u + v) >> 1
                if (arr[result[c]] < arrI) {
                    u = c + 1
                } else {
                    v = c
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1]
                }
                result[u] = i
            }
        }
    }
    u = result.length
    v = result[u - 1]
    while (u-- > 0) {
        result[u] = v
        v = p[v]
    }
    return result
}



// console.log(getSequence([0, 3, 4, 5, 2, 1, 6, 8, 7]));
// console.log(getSequence([0, 3, 1, 2]));
// console.log(getSequence([0, 1, 2]));
console.log(getSequence([6, 5, 4, 0, 1, 2, 3]));