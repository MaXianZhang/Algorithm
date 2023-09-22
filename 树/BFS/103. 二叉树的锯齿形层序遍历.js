// 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

 

// 示例 1：


// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[20,9],[15,7]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
// 输出：[]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    result = [];
    if (root === null) {
        return result;
    }

    const queue = [];
    queue.push(root)
    let key = true

    while (queue.length > 0) {
        const level = []
        const n = queue.length

        for (let i = 0; i < n; i++) {
            let element = queue.shift();

            if (key) {
                level.push(element.val)
            } else {
                level.unshift(element.val)
            }

            if (element.left) {
                queue.push(element.left)
            }
            if (element.right) {
                queue.push(element.right)
            }
        }
        key = !key
        result.push(level)
    }

    return result;
};