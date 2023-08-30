// 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。

// 除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。

// 给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。

//  

// 示例 1:



// 输入: root = [3,2,3,null,3,null,1]
// 输出: 7 
// 解释: 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7
// 示例 2:



// 输入: root = [3,4,5,1,3,null,1]
// 输出: 9
// 解释: 小偷一晚能够盗取的最高金额 4 + 5 = 9
//  

// 提示：

// 树的节点数在 [1, 104] 范围内
// 0 <= Node.val <= 104

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/house-robber-iii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// int res = Math.max(
//     // 不抢，去下家
//     dp(nums, start + 1),
//     // 抢，去下下家
//     nums[start] + dp(nums, start + 2)
// );

/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
    const book = new Map()

    const dp = root => {
        if (book.get(root)) {
            return book.get(root);
        }

        if (!root) {
            return 0;
        }

        book.set(root, Math.max(
            dp(root.left) + dp(root.right), // 不抢
            dp(root.left?.left) + dp(root.left?.right) + dp(root.right?.left) + dp(root.right?.right) + root.val // 抢
        ));
        return book.get(root);
    }

    return dp(root);
};

console.log(rob([1, 2, 3, 1]))

