const arr = [1,2,3,4,5,6]
const micro = 3


Array.prototype.headEach = function (innerFunc) {
  const heads = []
  while (arr.length !== 0) {
    heads.push({
      val: this.splice(0, 3)
    })
  }

  while (heads.length > 1) {
    const [left, right] = [heads.shift(), heads.shift()]

    heads.push({
      left,
      right,
    })
  }
  postOrderTraverseNode(heads[0], innerFunc)

}

const mac = (item) => {
  if (!item.val) {
    return 
  } else {
    console.log(item)
    // postOrderTraverseNode(item, console.log)
  }
  // console.log(item)
  // console.log(postOrderTraverseNode(item, mac))

}

arr.headEach(mac)
// 0 0 1 1 0 1 2 2 3 3 2 3 


function inOrderTraverseNode(node, callback) {
  if (node) {
    inOrderTraverseNode(node.left, callback)
    callback(node.val);
    inOrderTraverseNode(node.right, callback)
  }
}

//先序遍历
function preOrderTraverseNode(node, callback) {
  if (node) {
    callback(node.val);
    preOrderTraverseNode(node.left, callback)
    preOrderTraverseNode(node.right, callback)
  }
}

//后序遍历
function postOrderTraverseNode(node, callback) {
  if (node) {
    postOrderTraverseNode(node.left, callback)
    postOrderTraverseNode(node.right, callback)
    callback(node);
  }
}