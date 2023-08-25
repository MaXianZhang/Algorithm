// 给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。

// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

// 返回获得利润的最大值。

// 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

//  

// 示例 1：

// 输入：prices = [1, 3, 2, 8, 4, 9], fee = 2
// 输出：8
// 解释：能够达到的最大利润:  
// 在此处买入 prices[0] = 1
// 在此处卖出 prices[3] = 8
// 在此处买入 prices[4] = 4
// 在此处卖出 prices[5] = 9
// 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8
// 示例 2：

// 输入：prices = [1,3,7,5,10,3], fee = 3
// 输出：6
//  

// 提示：

// 1 <= prices.length <= 5 * 104
// 1 <= prices[i] < 5 * 104
// 0 <= fee < 5 * 104

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const book = {};
    // 开始的天，是否持股
    const dp = (index, hasIt) => {
        if (index >= prices.length) {
            return 0;
        }

        const key = `${index}-${hasIt}`

        if (book[key]) {
            return book[key];
        }

        if (hasIt) {
            book[key] = Math.max(
                // 有股票卖了
                dp(index + 1, false) + prices[index] - fee,
                // 有股票没卖
                dp(index + 1, true)
            )
        } else {
            book[key] = Math.max(
                dp(index + 1, true) - prices[index],
                dp(index + 1, false)
            )
        }
        return book[key];
    }

    return dp(0, false)

};

