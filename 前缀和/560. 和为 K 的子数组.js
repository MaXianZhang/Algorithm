// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。

// 子数组是数组中元素的连续非空序列。

 

// 示例 1：

// 输入：nums = [1,1,1], k = 2
// 输出：2
// 示例 2：

// 输入：nums = [1,2,3], k = 3
// 输出：2
 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const book = {
        '0': 1
    };

    let curPre = 0;
    let res = 0;

    nums.forEach((item) => {
        curPre += item;

        if (book[curPre - k]) {
            res += book[curPre - k];
        }

        if (!book[curPre]) {
            book[curPre] = 0;
        }
        book[curPre]++;
    })

    return res;

};

console.log((subarraySum([1,2,3], 3)));
console.log((subarraySum([1,1,1], 2)));

// error: 1 shouldBe: 0
console.log((subarraySum([1], 0)));


