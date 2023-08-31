// 如果假设输入一个数组 nums 和一个目标和 target，
// 请你返回 nums 中能够凑出 target 的两个元素的值，
// 比如输入 nums = [5,3,1,6], target = 9，
// 那么算法返回两个元素 [3,6]。可以假设只有且仅有一对儿元素可以凑出 target。

// 这样写思路是没问题的，但是如果结果出现重复元素，就会失败
// 所以在排序那里不能简单的直接排序，而是要带上排序之前的下标，然后再使用双指针，双指针的结构回溯下标

function twoSum(nums, target) {
    const copy = [...nums];
    nums = nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let res = null;

    while (!res && right > left) {
        if (nums[left] + nums[right] > target) {
            right --;
        } else if (nums[left] + nums[right] < target) {
            left ++;
        } else {
            res = [nums[left], nums[right]];
        }
    }

    return [copy.indexOf(res[0]), copy.indexOf(res[1])];
}


