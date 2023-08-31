// 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。



// 示例 1：


// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// 解释：如上图所示，4 皇后问题存在两个不同的解法。
// 示例 2：

// 输入：n = 1
// 输出：[["Q"]]


// 提示：

// 1 <= n <= 9[][]

/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function(n) {
    const yArray = [];
    const res = [];
    const createRow = (n, y) => {
        let result = '';

        for (let i = 0; i < n; i++) {
            result += (y === i ? 'Q' : '.');
        }

        return result;
    }
    
    const put = (x) => {
        if (x === n) {
            const arr = [];
            yArray.forEach((item) => {
                arr.push(createRow(n, item));
            })

            res.push(arr);
        }

        const mArray = []
        yArray.forEach((item, index) => {
            mArray.push(item + index);
        })

        const nArray = []
        yArray.forEach((item, index) => {
            nArray.push(item - index);
        })

        for (let i = 0; i < n; i++) {
            if (!yArray.includes(i) && !mArray.includes(i + x) && !nArray.includes(i - x)) {
                yArray.push(i);

                put(x + 1);

                yArray.pop();
            }
        }

    }

    put(0);

    return res;

};

