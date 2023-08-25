// 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

// 你可以对一个单词进行如下三种操作：

// 插入一个字符
// 删除一个字符
// 替换一个字符
//  

// 示例 1：

// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')
// 示例 2：

// 输入：word1 = "intention", word2 = "execution"
// 输出：5
// 解释：
// intention -> inention (删除 't')
// inention -> enention (将 'i' 替换为 'e')
// enention -> exention (将 'n' 替换为 'x')
// exention -> exection (将 'n' 替换为 'c')
// exection -> execution (插入 'u')

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/edit-distance
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
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const book = generateArray(word2.length + 1, word1.length + 1, 0);

    for (let i = 1; i <= word2.length; i++) {
        book[i][0] = i;
        for (let j = 1; j <= word1.length; j++) {
            book[0][j] = j;
        }
    }

    const dp = (y, x) => {
        if (y < 0 && x < 0) {
            return 0;
        }

        if (y < 0 || x < 0) {
            return Infinity;
        }

        if (book[y][x] !== 0) {
            return book[y][x];
        }

        if (word2[y - 1] === word1[x - 1]) {
            book[y][x] = dp(y - 1, x - 1)
        } else {
            book[y][x] = Math.min(dp(y - 1, x - 1), dp(y, x - 1), dp(y - 1, x)) + 1;
        }


        return book[y][x];
    }

    return dp(word2.length, word1.length);
};


console.log(minDistance('horse', 'ros'))
// console.log(minDistance('zoologicoarchaeologist', 'zoogeologist'))
// console.log(minDistance('sea', 'eat'))
