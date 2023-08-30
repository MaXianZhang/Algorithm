// 188. 买卖股票的最佳时机 IV
// 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格，和一个整型 k 。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。也就是说，你最多可以买 k 次，卖 k 次。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

 

// 示例 1：

// 输入：k = 2, prices = [2,4,1]
// 输出：2
// 解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
// 示例 2：

// 输入：k = 2, prices = [3,2,6,5,0,3]
// 输出：7
// 解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
//      随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const book = {};

    const dp = (index, k, hasStock) => {
        if (index >= prices.length || k === 0) {
            return 0;
        }

        const key = `${index}-${k}-${hasStock}`;
        if (book[key] !== undefined) {
            return book[key];
        }

        if (hasStock) {
            book[key] = Math.max(
                dp(index + 1, k, true),
                dp(index + 1, k - 1, false) + prices[index]
            );
        } else {
            book[key] = Math.max(
                dp(index + 1, k, false),
                dp(index + 1, k, true) - prices[index]
            );
        }

        return book[key];
    }

    return dp(0, k, false);
};

maxProfit(2, [2,4,1])

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const book = {};

    const dp = (index, hasStock) => {
        if (index >= prices.length) {
            return 0;
        }

        const key = `${index}-${hasStock}`;
        if (book[key] !== undefined) {
            return book[key];
        }

        if (hasStock) {
            book[key] = Math.max(
                dp(index + 1, true),
                dp(index + 1, false) + prices[index]
            );
        } else {
            book[key] = Math.max(
                dp(index + 1, false),
                dp(index + 1, true) - prices[index]
            );
        }

        return book[key];
    }

    return dp(0, false);
};


/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const book = {};

    const dp = (index, k, hasStock) => {
        if (index >= prices.length || k === 0) {
            return 0;
        }

        const key = `${index}-${k}-${hasStock}`;
        if (book[key] !== undefined) {
            return book[key];
        }

        if (hasStock) {
            book[key] = Math.max(
                dp(index + 1, k, true),
                dp(index + 1, k - 1, false) + prices[index]
            );
        } else {
            book[key] = Math.max(
                dp(index + 1, k, false),
                dp(index + 1, k, true) - prices[index]
            );
        }

        return book[key];
    }

    return dp(0, 2, false);
};


// 309. 最佳买卖股票时机含冷冻期
// 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​

// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

 

// 示例 1:

// 输入: prices = [1,2,3,0,2]
// 输出: 3 
// 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
// 示例 2:

// 输入: prices = [1]
// 输出: 0

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const book = {};

    const dp = (index, hasStock) => {
        if (index >= prices.length) {
            return 0;
        }

        const key = `${index}-${hasStock}`;
        if (book[key] !== undefined) {
            return book[key];
        }


        if (hasStock) {
            book[key] = Math.max(
                dp(index + 1, true),
                dp(index + 2, false) + prices[index]
            );
        } else {
            book[key] = Math.max(
                dp(index + 1, false),
                dp(index + 1, true) - prices[index]
            );
        }

        return book[key];
    }

    return Math.max(dp(0, false), dp(1, false));
};