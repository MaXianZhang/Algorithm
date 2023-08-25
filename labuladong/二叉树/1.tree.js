const lg = console.log;

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

lg('226. 翻转二叉树');

var invertTree = function(root) {
  if (!root) {
    return root;
  }

  [root.left, root.right] = [root.right, root.left];

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

lg('116. 填充每个节点的下一个右侧节点指针');

function handleTwoNode(left, right) {
  if (!left || !right) {
    return;
  }

  left.next = right;

  handleTwoNode(left.left, left.right);
  handleTwoNode(right.left, right.right);
  handleTwoNode(left.right, right.left);
}

var connect = function(root) {
  if (!root) {
    return root;
  }

  handleTwoNode(root.left, root.right);
  return root;
};

lg('114. 二叉树展开为链表');

var flatten = function(root) {
  if (!root) return;

  flatten(root.left);
  flatten(root.right);

  const originLeft = root.left;
  const originRight = root.right;

  root.left = null;
  root.right = originLeft

  let p = root;
  while (p.right) {
    p = p.right;
  }

  p.right = originRight;
  
  return root;
};

