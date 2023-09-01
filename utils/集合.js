//给原生的set 提供 交集 并集 差集  子集 等方法
Object.assign(Set.prototype, {
  // 并集
  bing: function (anotherSet) {
    let result = new Set()
    for(const j of this) {
      result.add(j)
    }
    for(const i of anotherSet) {
      result.add(i)
    }
    
    return result
  },

  //交集
  jiao: function (anotherSet) {
    let result = new Set()
    for(const i of anotherSet) {
      for(const j of this) {
        if(i == j) {
          result.add(i)
        }
      }
    }
    return result
  },

  // 子集
  callSon: function (anotherSet) {
    for(const i of anotherSet) {
      if(!this.has(i)) {
        return false
      }
    }

    return true
  },

  //差集
  cha: function (anotherSet) {
    let result = new Set()
    for(const i of this) {
      if(!anotherSet.has(i)) {
        result.add(i)
      }
    }

    return result
  }

})

var demo = new Set([1,2,3])
var demo2 = new Set([2,3])
console.log(demo)
console.log(demo.cha(demo2))
// console.log(demo)



