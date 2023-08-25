// 给你两个正整数数组 spells 和 potions ，长度分别为 n 和 m ，其中 spells[i] 表示第 i 个咒语的能量强度，potions[j] 表示第 j 瓶药水的能量强度。

// 同时给你一个整数 success 。一个咒语和药水的能量强度 相乘 如果 大于等于 success ，那么它们视为一对 成功 的组合。

// 请你返回一个长度为 n 的整数数组 pairs，其中 pairs[i] 是能跟第 i 个咒语成功组合的 药水 数目。

//  

// 示例 1：

// 输入：spells = [5,1,3], potions = [1,2,3,4,5], success = 7
// 输出：[4,0,3]
// 解释：
// - 第 0 个咒语：5 * [1,2,3,4,5] = [5,10,15,20,25] 。总共 4 个成功组合。
// - 第 1 个咒语：1 * [1,2,3,4,5] = [1,2,3,4,5] 。总共 0 个成功组合。
// - 第 2 个咒语：3 * [1,2,3,4,5] = [3,6,9,12,15] 。总共 3 个成功组合。
// 所以返回 [4,0,3] 。


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/successful-pairs-of-spells-and-potions
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const sortPotions = potions.sort((a, b) => a - b);

    const leftBound = spell => {
        const target = success;
        let left = 0;
        let right = sortPotions.length - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (sortPotions[mid] * spell < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (left >= sortPotions.length) {
            return 0;
        }

        return sortPotions.length - left;
    }

    return spells.map(item => {
        return leftBound(item);
    })

};