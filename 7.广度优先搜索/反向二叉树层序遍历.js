const lg = console.log
/**
 * @param { 二叉树层序遍历 }
 * @return { 别忘了root 为 null 的情况 }
   */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


function traverse(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = [];
  queue.push(root)

  while (queue.length > 0) {
    const level = []
    const n = queue.length

    for (let i = 0; i < n; i++) {
      const element = queue.shift();

      level.push(element.val)
      if(element.left) {
        queue.push(element.left)
      }
      if(element.right) {
        queue.push(element.right)
      }
    }

    result.unshift(level)
  }

  

  return result;
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log('Level order traversal: ', traverse(root));