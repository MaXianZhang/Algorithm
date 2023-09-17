const Heap = require('collections/heap'); //http://www.collectionsjs.com

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function merge_lists_mine(lists) {
  const minHeap = new Heap([], null, ((a, b) => b.value - a.value));

  let cur = {}

  resultHead = cur
  lists.forEach(element => {
    minHeap.push(element)
  });

  while(minHeap.length > 0) {
    // console.log(minHeap.peek().value)
    node = minHeap.pop()
    cur.next = node
    cur = cur.next
    if (node.next) {
      minHeap.push(node.next)
    }
  }

  return resultHead.next;
}

function merge_lists(lists) {
  const minHeap = new Heap([], null, ((a, b) => b.value - a.value));

  // 将每个列表的根放入最小堆中
  lists.forEach((a) => {
    if (a !== null) {
      minHeap.push(a);
    }
  });

  // 从最小堆中获取最小（顶部）元素并将其添加到结果中如果顶部元素有下一个元素，则将其添加到堆中
  let resultHead = null,
    resultTail = null;
  while (minHeap.length > 0) {
    const node = minHeap.pop();
    if (resultHead === null) {
      resultHead = resultTail = node;
    } else {
      resultTail.next = node;
      resultTail = resultTail.next;
    }
    if (node.next !== null) {
      minHeap.push(node.next);
    }
  }

  return resultHead;
}

const l1 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(8);

const l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

const l3 = new ListNode(1);
l3.next = new ListNode(3);
l3.next.next = new ListNode(4);

let result = merge_lists_mine([l1, l2, l3]);
process.stdout.write('Here are the elements form the merged list: ');
while (result !== null) {
  process.stdout.write(`${result.value} `);
  result = result.next;
}