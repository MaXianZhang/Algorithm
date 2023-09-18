// 中等
// 相关标签
// 相关企业
// 给定一个二维矩阵 matrix，以下类型的多个请求：

// 计算其子矩形范围内元素的总和，该子矩阵的 左上角 为 (row1, col1) ，右下角 为 (row2, col2) 。
// 实现 NumMatrix 类：

// NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
// int sumRegion(int row1, int col1, int row2, int col2) 返回 左上角 (row1, col1) 、右下角 (row2, col2) 所描述的子矩阵的元素 总和 。
 

// 示例 1：



// 输入: 
// ["NumMatrix","sumRegion","sumRegion","sumRegion"]
// [[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
// 输出: 
// [null, 8, 11, 12]

// 解释:
// NumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);
// numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
// numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
// numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)
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
