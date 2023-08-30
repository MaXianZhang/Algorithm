// 有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

// 现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。

// 求所能获得硬币的最大数量。

//  

// 示例 1：
// 输入：nums = [3,1,5,8]
// 输出：167
// 解释：
// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
// 示例 2：

// 输入：nums = [1,5]
// 输出：10
//  

// 提示：

// n == nums.length
// 1 <= n <= 300
// 0 <= nums[i] <= 100


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/burst-balloons
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function generateArray(rows, columns, value) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr[i] = [];
        for (var j = 0; j < columns; j++) {
            arr[i][j] = value
        }
    }
    return arr;
}


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const book = generateArray(nums.length - 1, nums.length - 1, 0);
    nums[-1] = 1;
    nums[nums.length] = 1;

    const dp = (left, right) => {
        if (left === right) {
            return nums[left];
        }

        if (book[left][right]) {
            return book[left][right];
        }

        book[left][right] = 


        return book[left][right];
    }


    return dp(0, nums.length - 1)
    

};
