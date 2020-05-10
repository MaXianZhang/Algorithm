/**
 * @param { 模板 }
 * @return { while循环链表
 * 用双指针遍历链表 }
   */

  function reverse(head) {
    let current = head,
      previous = null;
    while (current !== null) {
      // 临时存储下一个节点
      next = current.next;
      // 反向指针
      current.next = previous; // reverse the current node
      // 有点双指针的意思，两个指针都向后移动
      previous = current;
      current = next;
    }
    return previous;
  }
 
 const ReverseaLinkedList = require('./反转链表')
  
 const lg = console.log