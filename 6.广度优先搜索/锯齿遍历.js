
const lg = console.log
/**
 * @param { 锯齿遍历 }
 * @return { queue.shift改成pop就是深度优先遍历了。。。。。 }
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
}


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
console.log('Level order traversal: ', traverse(root));