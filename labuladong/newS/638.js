// 638. 大礼包
// 在 LeetCode 商店中， 有 n 件在售的物品。每件物品都有对应的价格。然而，也有一些大礼包，每个大礼包以优惠的价格捆绑销售一组物品。

// 给你一个整数数组 price 表示物品价格，其中 price[i] 是第 i 件物品的价格。另有一个整数数组 needs 表示购物清单，其中 needs[i] 是需要购买第 i 件物品的数量。

// 还有一个数组 special 表示大礼包，special[i] 的长度为 n + 1 ，其中 special[i][j] 表示第 i 个大礼包中内含第 j 件物品的数量，且 special[i][n] （也就是数组中的最后一个整数）为第 i 个大礼包的价格。

// 返回 确切 满足购物清单所需花费的最低价格，你可以充分利用大礼包的优惠活动。你不能购买超出购物清单指定数量的物品，即使那样会降低整体价格。任意大礼包可无限次购买。

 

// 示例 1：

// 输入：price = [2,5], special = [[3,0,5],[1,2,10]], needs = [3,2]
// 输出：14
// 解释：有 A 和 B 两种物品，价格分别为 ¥2 和 ¥5 。 
// 大礼包 1 ，你可以以 ¥5 的价格购买 3A 和 0B 。 
// 大礼包 2 ，你可以以 ¥10 的价格购买 1A 和 2B 。 
// 需要购买 3 个 A 和 2 个 B ， 所以付 ¥10 购买 1A 和 2B（大礼包 2），以及 ¥4 购买 2A 。
// 示例 2：

// 输入：price = [2,3,4], special = [[1,1,0,4],[2,2,1,9]], needs = [1,2,1]
// 输出：11
// 解释：A ，B ，C 的价格分别为 ¥2 ，¥3 ，¥4 。
// 可以用 ¥4 购买 1A 和 1B ，也可以用 ¥9 购买 2A ，2B 和 1C 。 
// 需要买 1A ，2B 和 1C ，所以付 ¥4 买 1A 和 1B（大礼包 1），以及 ¥3 购买 1B ， ¥4 购买 1C 。 
// 不可以购买超出待购清单的物品，尽管购买大礼包 2 更加便宜。

/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    const validSpecials = filterOutInvalidSpecial(special, price)
    const memo = new Map()
    const totalCount = price.length;
    const dfsHelper = needs => {
        const hasMemo = !memo.has(needs.join(','));

        console.log(needs, hasMemo)

        if (hasMemo) {
            let minPrice = priceWithoutSpecial(price, needs)
    
            for (const curSpecial of validSpecials) {
                const specialPrice = curSpecial[totalCount]
                const remainNeeds = []
    
                for (let i = 0; i < totalCount; i++) {
                    if (curSpecial[i] > needs[i]) {
                        break
                    }
    
                    remainNeeds.push(needs[i] - curSpecial[i]);
                }
    
                if (remainNeeds.length === totalCount) {
                    minPrice = Math.min(minPrice, dfsHelper(remainNeeds) + specialPrice);
                }
            }
            
            memo.set(needs.join(','), minPrice);
        }
    
        return memo.get(needs.join(','))
    }

    return dfsHelper(needs)
};

function priceWithoutSpecial(prices, needs) {
    let price = 0

    for (let i = 0; i < needs.length; i++) {
        price += needs[i] * prices[i]
    }

    return price
}

function filterOutInvalidSpecial(special, price) {
    return special.filter((sp) => {
        let totalCount = 0
        let totalPrice = 0

        for (let i = 0; i < sp.length - 1; i++) {
            totalCount += sp[i]
            totalPrice += price[i] * sp[i]
        }

        if (totalCount === 0 || totalPrice < sp[sp.length - 1]) {
            return false
        }

        return true
    })
}

console.log(shoppingOffers([2,5], [[3,0,5],[1,2,10]], [3,2]))

