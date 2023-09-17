/**
 * @param { k路合并 }
 * @return { 这种模式可以帮助我们解决涉及排序数组列表的问题。 }
  */

// class ListNode {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }


// const merge_lists = function (lists) {
//   resultHead = {};
//   let cur = resultHead

//   while(lists.some(item => item && item.next)) {
//     lists.sort((a, b) => a.value - b.value)
//     cur.next = lists[0]
//     lists[0] = lists[0].next
//     cur = cur.next
//   }

//   // TODO: Write your code here
//   return resultHead.next;
// };



// l1 = new ListNode(2)
// l1.next = new ListNode(6)
// l1.next.next = new ListNode(8)

// l2 = new ListNode(3)
// l2.next = new ListNode(6)
// l2.next.next = new ListNode(7)

// l3 = new ListNode(1)
// l3.next = new ListNode(3)
// l3.next.next = new ListNode(4)

// result = merge_lists([l1, l2, l3])
// output = "Here are the elements form the merged list: ";
// while (result != null) {
//   output += result.value + " ";
//   result = result.next;
// }
// console.log(output);




// const testHeap = require('./测试Heap')
const MergeKSortedLists = require('./k路合并')
