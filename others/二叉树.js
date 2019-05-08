function Node(val) {
  this.val = val
  this.left = null
  this.right = null
}

//辅助函数，用递归去寻找元素该去的位置
function insertNode(node, newNode) {
  if (newNode.val < node.val) {
    if (node.left === null) {
      node.left = newNode
    } else {
      insertNode(node.left, newNode)
    }
  } else {
    if (node.right === null) {
      node.right = newNode
    } else {
      insertNode(node.right, newNode)
    }
  }
}

//辅助函数，用递归去寻找元素所在的位置
function searchNode(node, val) {
  if(node == null) {
    return false
  } 
  if (val < node.val) {
    return searchNode(node.left, val)
  } else if (val > node.val) {
    return searchNode(node.right, val)
  } else {
    return true
  }
}

function maxNode(node) {
  if (node) {
    while(node && node.right !== null) {
      node = node.right
    }
    return node
  }
  return null
}

function minNode(node) {
  if (node) {
    while(node && node.left !== null) {
      node = node.left
    }
    return node
  }
  return null
}

//辅助函数，用递归去删除相应元素
function removeNode(node, val) {

  if (node == null) {
    return null
  }

  if(val < node.val) {
    node.left = removeNode(node.left, val)
    return node
  } else if (val > node.val) {
    node.right = removeNode(node.right, val)
    return node
  } else {
    //这里找到了要删除的元素
    //第一种情况，一个叶节点
    if (node.left === null && node.right === null) {
      node = null
      return node
    }

    //第二种情况，只有一个子节点的节点
    if (node.left === null) {
      node = node.right
      return node
    } else if (node.right === null) {
      node = node.left
      return node
    }

    //第三种情况，一个有两个子节点的节点
    const min = minNode(node)
    const val = min.val
    removeNode(node.right, val)
    node.val = val
    return node
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)

    if (this.root === null) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }

  search (val) {
    return searchNode(this.root, val)
  }

  remove(val) {
    this.root = removeNode(this.root, val)
  }

  findMax() {
    return maxNode(this.root)
  }

  findMin() {
    return minNode(this.root)
  }
}

var demo = new BinarySearchTree()

demo.insert(11)
demo.insert(7)
demo.insert(15)
demo.insert(5)
demo.insert(3)
demo.insert(9)
demo.insert(8)
demo.insert(10)
demo.insert(13)
demo.insert(12)
demo.insert(14)
demo.insert(20)
demo.insert(18)
demo.insert(25)
demo.insert(6)

// demo.remove(25)

// console.log(demo.findMax())

// 中序遍历
function inOrderTraverseNode(node, callback) {
  if (node !== null) {
    inOrderTraverseNode(node.left, callback)
    callback(node.val);
    inOrderTraverseNode(node.right, callback)
  }
}

//先序遍历
function preOrderTraverseNode(node, callback) {
  if (node !== null) {
    callback(node.val);
    preOrderTraverseNode(node.left, callback)
    preOrderTraverseNode(node.right, callback)
  }
}

//后续遍历
function postOrderTraverseNode(node, callback) {
  if (node !== null) {
    postOrderTraverseNode(node.left, callback)
    postOrderTraverseNode(node.right, callback)
    callback(node.val);
  }
}

// 一个二叉树是否包含另一个二叉树，用了两个递归
function HasSubtree(pRoot1, pRoot2) {
  // 递归：遍历大树
  // 出口：节点为null，遍历到了低端
  if(!pRoot1 || !pRoot2) return false
  else return isSameTree(pRoot1, pRoot2)
    || HasSubtree(pRoot1.left, pRoot2) 
    || HasSubtree(pRoot1.right, pRoot2) 
}
 
function isSameTree(root1, root2) {
  if(!root2) return true
  if(!root1) return false

  if(root1.val !== root2.val) return false
  else return isSameTree(root1.left, root2.left) 
    && isSameTree(root1.right, root2.right) 
}

//根据中序遍历和先序遍历，重新排布二叉树
function reConstructBinaryTree(pre, vin) {
  if (vin.length == 0) return null
  let root = pre.shift()
  let position = vin.indexOf(root)
  let [vinLeft, vinRight] = [vin.slice(0, position), vin.slice(position + 1)]
  let [preLeft, preRight] = [pre.slice(0, position), pre.slice(position)]
 
  return {
    val: root,
    left: reConstructBinaryTree(preLeft, vinLeft),
    right: reConstructBinaryTree(preRight, vinRight)
  }
}


// 镜像二叉树
function Mirror(root) {
  if (!root) return
  [root.left, root.right] = [root.right, root.left]
  Mirror(root.left)
  Mirror(root.right)
}
//广度遍历二叉树
function PrintFromTopToBottom(root) {
  var stack = []
  var res = []
  if(root) stack.push(root)
  while(stack.length > 0 ) {
    root = stack.shift()
    if (root.left) stack.push(root.left)
    if (root.right) stack.push(root.right)
   
    res.push(root.val)
  }
  return res
}

// 判断一个遍历结果是不是一个搜索二叉树的后序遍历
function VerifySquenceOfBST(arr) {
  if (arr.length == 0) return true
  let root = arr.pop()
  let i = 0
  let len = arr.length
  while(i < len && arr[i] < root) i++
  let res = arr.slice(i).every(item => item > root)
  let [left, right] = [arr.slice(0, i), arr.slice(i)]
  return res && VerifySquenceOfBST(left) && VerifySquenceOfBST(right)
}

//二叉树的深度
function TreeDepth(root) {
  if(!root) return 0
  return Math.max(1 + TreeDepth(root.left), 1 + TreeDepth(root.right))
}

// 平衡二叉树
var key = true
function IsBalanced(node) {
    if (!node) return true
    key = true
    IsBalanced_helper(node)
    return key
}

function IsBalanced_helper(node) {
    if (!node) return 0
    var leftLen = IsBalanced_helper(node.left)
    var rightLen = IsBalanced_helper(node.right)
    if (Math.abs(leftLen - rightLen) > 1) key = false
    return 1 + ((leftLen - rightLen > 0) ? leftLen : rightLen)
}

// 遍历所有的二叉树路径
var dict = []
function getAllPath(node, stack = []) {
  if(node && !node.left && !node.right) {
    dict.push(stack.concat(node.val))
    return
  }
  if (node !== null) {
    getAllPath(node.left, stack.concat(node.val))
    getAllPath(node.right, stack.concat(node.val))
  }
}


module.exports = {
  HasSubtree,
  isSameTree,
  reConstructBinaryTree,
  Mirror,
  PrintFromTopToBottom,
  VerifySquenceOfBST,
  TreeDepth,
  IsBalanced,
  getAllPath,
}
