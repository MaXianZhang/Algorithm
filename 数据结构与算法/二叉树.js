function Node(key) {
  this.key = key
  this.left = null
  this.right = null
}

//辅助函数，用递归去寻找元素该去的位置
function insertNode(node, newNode) {
  if (newNode.key < node.key) {
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
function searchNode(node, key) {
  if(node == null) {
    return false
  } 
  if (key < node.key) {
    return searchNode(node.left, key)
  } else if (key > node.key) {
    return searchNode(node.right, key)
  } else {
    return true
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(key) {
    const newNode = new Node(key)

    if (this.root === null) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }

  search (key) {
    return searchNode(this.root, key)
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



// 中序遍历
function inOrderTraverseNode(node, callback) {
  if (node !== null) {
    inOrderTraverseNode(node.left, callback)
    callback(node.key);
    inOrderTraverseNode(node.right, callback)
  }
}

//先序遍历
function preOrderTraverseNode(node, callback) {
  if (node !== null) {
    callback(node.key);
    inOrderTraverseNode(node.left, callback)
    inOrderTraverseNode(node.right, callback)
  }
}

//后续遍历
function postOrderTraverseNode(node, callback) {
  if (node !== null) {
    inOrderTraverseNode(node.left, callback)
    inOrderTraverseNode(node.right, callback)
    callback(node.key);
  }
}

inOrderTraverseNode(demo.root, function(content) {
  console.log(content)
})
