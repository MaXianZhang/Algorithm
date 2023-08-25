// 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。

// 下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。

//  

// 示例 1：



// 输入：matrix = [[2,1,3],[6,5,4],[7,8,9]]
// 输出：13
// 解释：如图所示，为和最小的两条下降路径
// 示例 2：



// 输入：matrix = [[-19,57],[-40,-5]]
// 输出：-59
// 解释：如图所示，为和最小的下降路径


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/minimum-falling-path-sum
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
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    const book = generateArray(matrix.length, matrix[0].length, null);

    const dp = (y, x) => {
        if (y < 0 || x < 0 || y >= matrix.length || x >= matrix[0].length) {
            return Infinity;
        }

        if (y === 0) {
            return matrix[y][x];
        }

        // 记忆
        if (book[y][x] !== null) {
            return book[y][x];
        }

        book[y][x] = Math.min(dp(y - 1, x), dp(y - 1, x - 1), dp(y - 1, x + 1)) + matrix[y][x];

        return book[y][x];
    }

    return Math.min(...matrix[matrix.length - 1].map((item, index) => dp(matrix.length - 1, index)))
};

console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]))


