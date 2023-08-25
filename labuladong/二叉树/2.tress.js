const lg = console.log;

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

lg('654.最大二叉树');
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */


var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) {
        return null;
    }

    if (nums.length === 1) {
        return new TreeNode(nums[0])
    }
    const i = findMaxIndex(nums);

    return new TreeNode(
        nums[i],
        constructMaximumBinaryTree(nums.slice(0, i)),
        constructMaximumBinaryTree(nums.slice(i + 1))
    );
};

function findMaxIndex(nums) {
    let mark = nums[0];
    if (nums.length === 1) {
        return mark;
    }
    let res = 0;

    nums.forEach((element, i) => {
        if (element > mark) {
            mark = element;
            res = i;
        }
    });

    return res;
}

lg(constructMaximumBinaryTree([3,2,1,6,0,5]))

lg('105.从前序与中序遍历序列构造二叉树');

var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) {
        return null
    }
    if (preorder.length === 1) {
        return new TreeNode(preorder[0])
    }

    const nodeVal = preorder.shift();
    const nodeIndexInOrder = inorder.indexOf(nodeVal);
    const leftByInOrder = inorder.slice(0, nodeIndexInOrder);
    const rightByInOrder = inorder.slice(nodeIndexInOrder + 1);

    return new TreeNode(
        nodeVal,
        buildTree(preorder.slice(0, leftByInOrder.length), leftByInOrder),
        buildTree(preorder.slice(leftByInOrder.length), rightByInOrder)
    )
};

lg(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))

lg('106.从中序与后序遍历序列构造二叉树');

var buildTree = function(inorder, postorder) {
    if (postorder.length === 0) {
        return null
    }
    if (postorder.length === 1) {
        return new TreeNode(postorder[0])
    }
    const nodeVal = postorder.pop();
    const nodeIndexInOrder = inorder.indexOf(nodeVal);
    const leftByInOrder = inorder.slice(0, nodeIndexInOrder);
    const rightByInOrder = inorder.slice(nodeIndexInOrder + 1);

    return new TreeNode(
        nodeVal,
        buildTree(leftByInOrder, postorder.slice(0, leftByInOrder.length)),
        buildTree(rightByInOrder, postorder.slice(leftByInOrder.length))
    )
};

lg(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))

lg('889.从中序与后序遍历序列构造二叉树');

var constructFromPrePost = function(preorder, postorder) {
    if (postorder.length === 0) {
        return null
    }
    if (postorder.length === 1) {
        return new TreeNode(postorder[0])
    }

    preorder.shift();
    const nodeVal = postorder.pop();
    const leftNodeVal = preorder[0];
    const i = postorder.indexOf(leftNodeVal) + 1;

    console.log(preorder.slice(0, i), postorder.slice(0, i),
    preorder.slice(i), postorder.slice(i));

    return new TreeNode(
        nodeVal,
        constructFromPrePost(preorder.slice(0, i), postorder.slice(0, i)),
        constructFromPrePost(preorder.slice(i), postorder.slice(i))
    )
};

lg(constructFromPrePost([1,2,4,5,3,6,7], [4,5,2,6,7,3,1]));
