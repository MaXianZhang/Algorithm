const lg = console.log

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // level order traversal using 'next' pointer
  print_level_order() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        process.stdout.write(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
};

function connect_level_order_siblings_mine(root) {
  if (!root) {
    return null
  }
  const queue = [];
  queue.push(root)

  while (queue.length > 0) {
    const n = queue.length
    let last = queue[0]

    for (let i = 0; i < n; i++) {
      const curNode = queue.shift();

      if (i !== 0) {
        last.next = curNode
      }
      last = curNode

      if (curNode.left) {
        queue.push(curNode.left)
      }
      if (curNode.right) {
        queue.push(curNode.right)
      }

    }
    last.next = null
  }
  return root
};

function connect_level_order_siblings(root) {
  if (root === null) {
    return;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let previousNode = null,
      levelSize = queue.length;
    // connect all nodes of this level
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      if (previousNode !== null) {
        previousNode.next = currentNode;
      }
      previousNode = currentNode;
      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
}


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root);

root.print_level_order()