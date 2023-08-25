// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 示例 1：[[1,3,1],[1,5,1],[4,2,1]]

// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。
// 示例 2：

// 输入：grid = [[1,2,3],[4,5,6]]
// 输出：12

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/minimum-path-sum
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
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const book = generateArray(grid.length, grid[0].length, -1);

    const dp = (y, x) => {
        if (y === 0 && x === 0) {
            return grid[0][0];
        }

        if (y < 0 || x < 0) {
            return Infinity;
        }

        if (book[y][x] !== -1) {
            return book[y][x];
        }

        book[y][x] = Math.min(dp(y - 1, x), dp(y, x - 1)) + grid[y][x];

        return book[y][x];
    }

    return dp(grid.length - 1, grid[0].length - 1)
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))

