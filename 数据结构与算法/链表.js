function Node(element) {
  this.element = element
  this.next = null
}

function DoublyNode() {
  this.element = element
  this.next = null
  this.prev = null
}

function LinkedList() {
  this.length = 0
  this.head = null
}

function DoublyLinkedList() {
  this.length = 0
  this.head = null
  this.tail = null
}

LinkedList.prototype = {
  append: function(element) {
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
  },

  removeAt: function(position) {
    if(position > -1 && position <= this.length) {
      var deleteElem = this.head
      var previous
      if(position == 0) {
        Nnode.next = this.head
        this.head = Nnode
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
  },

  insert: function(position, element) {
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
  },

  toString: function() {
    var current = this.head
    var string = ''

    while (current) {
      string = current.element
      current = current.next
    }

    return string
  },

  index: function (element) {
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
  },

  remove: function(element) {
    var index = this.indexOf(element)
    return this.removeAt(index)
  },

  
}


var demo = new LinkedList()

demo.append([1])
demo.append([2])
demo.append([3])
demo.append([4])
demo.append([5])
demo.removeAt(2)

console.log(demo.head.next)
console.log('')
console.log(demo.head.next.next)

// console.log(demo)

var len = 8

