function Node(element) {
  this.element = element
  this.next = null
}

function DoublyNode() {
  this.element = element
  this.next = null
  this.prev = null
}

function DoublyLinkedList() {
  this.length = 0
  this.head = null
}

class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  append (element) {
    var node = new Node(element),
        current;
    if(this.head == null) {
      this.head = node
    } else {
      current = this.head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  removeAt (position) {
    if(position > -1 && position <= this.length) {
      var deleteElem = this.head
      var previous
      if(position == 0) {
        this.head = deleteElem.next
      } else {
        var index = 0
        // 这里循环了position - 1 次，使deleteElem指向我们想要的位置
        // 再保留删除元素的上一个元素
        while(index++ < position) {
          previous = deleteElem
          deleteElem = deleteElem.next
        }

        //这里是最重要的一步，将上一个元素的next，指向删除元素的next，从而使删除的元素没有东西指向它，js自动回收这个对象
        previous.next = deleteElem.next
      }

      this.length--
      return deleteElem.next
    }
  }

  insert (position, element) {
    if(position >= 0 && position <= length) {
      var node = new Node(element)
      var current = head
      var previous
      var index = 0

      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      length++

      return true
    } else {
      return false
    }
  }

  toString () {
    var current = this.head
    var string = ''

    while (current) {
      string = current.element
      current = current.next
    }

    return string
  }

  index  (element) {
  var current = this.head
  var index = -1

  while(current) {
    if(element === current.element) {
      return index
    }
    index++
    current = current.next
  }

  return -1
  }

  remove (element) {
    var index = this.indexOf(element)
    return this.removeAt(index)
  }
}

//遍历链表
function printListFromTailToHead(head) {
  let [res, cur] = [[], head]
  while (cur != null) {
      res.push(cur.val);
      cur = cur.next;
  }
  return res.reverse();
}

//输出一个链表的倒数第k个值
function FindKthToTail(head, k) {
  let [cur, store] = [head, []]
  while(cur) {
    store.push(cur)
    cur = cur.next
  }
  return store[store.length - k]
}

//反转链表
function ReverseList(pHead) {
  let [pre, cur] = [null, pHead]
  while(cur) {
    var next = cur.next
    cur.next = pre
    [pre, cur] = [cur, next]
  }
  return pre
}


//合并两个单调递增的链表，合并后的链表单调递增
function MergeList(pHead1, pHead2) {
  if(!pHead1) return pHead2;
  if(!pHead2) return pHead1;
  let [smaller, larger] = [pHead1, pHead2].sort((a, b) => {
    return a.val - b.val
  })
  smaller.next = Merge(smaller.next, larger)
  return smaller
}
//复杂链表的测试用例
function RandomListNode(x){
  this.label = x;
  this.next = null;
  this.random = null;
}
var list = new RandomListNode(0)
var list1 = new RandomListNode(1)
var list2 = new RandomListNode(2)
var list3 = new RandomListNode(3)
var list4 = new RandomListNode(4)

list.next = list1
list1.next = list2
list2.next = list3
list3.next = list4

list.random = list2
list1.random = list2
list2.random = list1
list3.random = list4
list4.random = list3

//克隆一个复杂链表
function CloneList(pHead) {
  let cur = pHead
  while(cur) {
    var next = cur.next
    var copy = cur.next = new RandomListNode(cur.label)
    copy.next = next
    cur = next
  }


  cur = pHead
  let random = null
  while(cur) {
    if(cur.random) {
      random = cur.random
    } else {
      cur.random = random.next
    }
    cur = cur.next
  }

  cur = pHead = pHead.next
  let key = false
  let pre = null
  while(cur) {
    if(key) {
      pre.next = cur.next
    } else {
      pre = cur
    }
    key = !key
    cur = cur.next
  }

  var stack = []
  cur = pHead
  while(cur) {
    stack.push(cur)
    cur = cur.next
  }

  return pHead
}