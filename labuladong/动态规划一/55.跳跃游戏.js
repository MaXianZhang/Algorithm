// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标。

//  

// 示例 1：

// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
// 示例 2：

// 输入：nums = [3,2,1,0,4]
// 输出：false
// 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const len = nums.length;
    const book = new Array(len).fill(false);

    book[0] = true;

    nums.forEach((item, i) => {
        const cur = nums[i];
        let j = cur;

        while (j !== 0) {
            if (j + i < len) {
                book[j + i] = true;
            }

            j--;
        }
    })

    return book.every(item => item === true)
};

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))

// 总结
// TODO 贪心算法