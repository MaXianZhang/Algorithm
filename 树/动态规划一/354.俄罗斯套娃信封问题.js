// 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。

// 当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

// 请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

// 注意：不允许旋转信封。

//  
// 示例 1：

// 输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
// 输出：3
// 解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
// 示例 2：

// 输入：envelopes = [[1,1],[1,1],[1,1]]
// 输出：1

// 超时版本

// /**
//  * @param {number[][]} envelopes
//  * @return {number}
//  */
// var maxEnvelopes = function(envelopes) {
//     const book = [1];
//     const sortEnvelopes = envelopes.sort((a, b) => a[0] - b[0]);

//     for (let i = 0; i < sortEnvelopes.length; i++) {
//         const [x, y] = sortEnvelopes[i];
//         let j = i - 1;
//         let res = 1;

//         while (j >= 0) {
//             if (book[j] + 1 > res && sortEnvelopes[j][1] < y && sortEnvelopes[j][0] < x) {
//                 res = book[j] + 1;
//             }
//             j--;
//         }
//         book[i] = res;
//     }

//     return Math.max(...book)
// };


// 尝试优化 先对宽度w进行升序排序，如果遇到w相同的情况，则按照高度h降序排序。之后把所有的h作为一个数组，在这个数组上计算 LIS 的长度就是答案。


/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    const book = [1];
    const sortEnvelopes = envelopes.sort((a, b) => {
        if (a[0] - b[0] === 0) {
            return b[1] - a[1]
        }

        return a[0] - b[0]
    }).map(item => item[1]);

    for (let i = 0; i < sortEnvelopes.length; i++) {
        const cur = sortEnvelopes[i];
        let j = i - 1;
        let res = 1;

        while (j >= 0) {
            if (book[j] + 1 > res && sortEnvelopes[j] < cur) {
                res = book[j] + 1;
            }
            j--;
        }
        book[i] = res;
    }

    return Math.max(...book)
};


console.log(maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]]));
// console.log(maxEnvelopes([[1,1],[1,1],[1,1]]));
// console.log(maxEnvelopes([[4,5],[4,6],[6,7],[2,3],[1,1],[1,1]]));
// console.log(maxEnvelopes([[1,2],[2,3],[3,4],[4,5],[5,6],[5,5],[6,7],[7,8]]));




