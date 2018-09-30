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
function removeNode(node, key) {

  if (node == null) {
    return null
  }

  if(key < node.key) {
    node.left = removeNode(node.left, key)
    return node
  } else if (key > node.key) {
    node.right = removeNode(node.right, key)
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
    const key = min.key
    removeNode(node.right, key)
    node.key = key
    return node
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

  remove(key) {
    this.root = removeNode(this.root, key)
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

demo.remove(25)

console.log(demo.findMax())
