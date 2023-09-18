// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

 

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：

// 输入：nums = [3,3], target = 6
// 输出：[0,1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const copy = [...nums];
    
    const [left, right] = twoSumBase(copy, target)[0];

	// 防止两个数字一样
    return [nums.indexOf(left), nums.lastIndexOf(right)];
}


function twoSumBase(nums, target) {
    nums = nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    const res = [];

    while (left < right) {
        const curSum = nums[left] + nums[right];

        if (curSum < target) {
            left++;
        } else if (curSum > target) {
            right--;
        } else {
            res.push([nums[left], nums[right]]);

            left++;
            right--;

            while (nums[left] === nums[left - 1] && left < right) {
                left++;
            }
            while (nums[right] === nums[right + 1] && left < right) {
                right--;
            }
        }
    }

    return res;
}

module.exports = twoSumBase;

console.log(twoSum([2,2,7,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3, 3], 6));