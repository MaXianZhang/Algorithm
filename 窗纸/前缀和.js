const lg = console.log;

lg('303. 区域和检索 - 数组不可变');
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let total = 0;
    this.memery = [total];

    nums.forEach(item => {
        total += item;
        this.memery.push(total)
    });
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.memery[right + 1] - this.memery[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
lg(numArray.sumRange(0, 2)); // return 1 ((-2) + 0 + 3)
lg(numArray.sumRange(2, 5)); // return -1 (3 + (-5) + 2 + (-1)) 
lg(numArray.sumRange(0, 5)); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))


lg('304. 二维区域和检索 - 矩阵不可变');
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.memery = JSON.parse(JSON.stringify(matrix));

    for(let y = 0; y < matrix.length; y++) {
        for(let x = 0; x < matrix[y].length; x++) {
            this.memery[y][x] = (x > 0 ? this.memery[y][x - 1] : 0)
                + (y > 0 ? this.memery[y - 1][x] : 0)
                - (x > 0 && y > 0 ? this.memery[y - 1][x - 1]: 0)
                + matrix[y][x];
        }
    }
    for (let y = 0; y < matrix.length; y++) {
        this.memery[y].unshift(0)
    }
    this.memery.unshift(new Array(this.memery[0].length).fill(0))
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.memery[row2 + 1][col2 + 1] - this.memery[row1][col2 + 1] - this.memery[row2 + 1][col1] + this.memery[row1][col1]
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
const numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);
lg(numMatrix.sumRegion(2, 1, 4, 3)); // return 8 (红色矩形框的元素总和)
lg(numMatrix.sumRegion(1, 1, 2, 2)); // return 11 (绿色矩形框的元素总和)
lg(numMatrix.sumRegion(1, 2, 2, 4)); // return 12 (蓝色矩形框的元素总和)


lg('506. 和为K的子数组');

function demo(nums, k) {
    const preSum = [0];

    nums.forEach(item => {
        const cur = preSum[preSum.length - 1] + item;
        preSum.push(cur);
    })

    let res = 0;

    for (let right = 1; right < preSum.length; right++) {
        for (let left = 0; left < right; left++) {
            if (preSum[right] - preSum[left] === k) {
                res++
            }
        }
    }

    return res;
}

lg(demo([1,2,3], 3))
lg(demo([1,1,1], 2))
