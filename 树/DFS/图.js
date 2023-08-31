class Graph {
  constructor() {
    this.vertices = []
    this.adjList = {}
  }

  addVertex(v) {
    this.vertices.push(v)
  }

  addEage(v, w) {
    if(this.vertices.indexOf(v) === -1 || this.vertices.indexOf(w) === -1)
      return
    if (!this.adjList[v])
      this.adjList[v] = []
    this.adjList[v].push(w)
    if (!this.adjList[w])
      this.adjList[w] = []
    this.adjList[w].push(v)
  }

  //广度优先遍历
  BFS(first, callback) {
    let grey = []
    let black = []
    //记录到初试顶点的距离和上层元素
    let d = []
    let pred = []
    grey.push(first)

    this.vertices.forEach(item => {
      d[item] = 0
      pred[item] = null
    })

    while (grey.length !== 0) {
      let cur = grey.shift()
      this.adjList[cur].forEach(next => {
        if (black.indexOf(next) == -1 && grey.indexOf(next) == -1) {
          //记录
          d[next] = d[cur] + 1
          pred[next] = cur
          grey.push(next)
        }
      })
      black.push(cur)
      callback && callback(pred[cur], cur, d[cur])
    }
  }

  //深度优先遍历
  DFS (first, callback) {
    let grey = []
    let black = []
    let pred = []
    this.vertices.forEach(item => {
      pred[item] = null
    })

    grey.push(first)

    while (grey.length !== 0) {
      let cur = grey.pop()
      this.adjList[cur].forEach(next => {
        if (black.indexOf(next) == -1 && grey.indexOf(next) == -1) {
          pred[next] = cur
          grey.push(next)
        }
      })
      black.push(cur)
      callback && callback(pred[cur], cur)
    }
  }
}

var demoArr = ['a','b','c','d','e','f','g','h','i'];
var demo = new Graph()

demoArr.forEach(item => {
  demo.addVertex(item)
})

demo.addEage('a', 'b')
demo.addEage('a', 'c')
demo.addEage('a', 'd')
demo.addEage('c', 'd')
demo.addEage('c', 'g')
demo.addEage('d', 'g')
demo.addEage('d', 'h')
demo.addEage('b', 'e')
demo.addEage('b', 'f')
demo.addEage('e', 'i')
console.log(demo)
//计算出a到其他顶点的最短距离
//做到这点，需要给广度遍历的回调函数增加了两个参数，上层的元素，和当前的层数

let path = []
demo.BFS('a', (pre, cur, dis) => {
  if(dis == 1) {
    path.push([pre, cur])
  } else if(dis > 1) {
    path.forEach(item => {
      if(item[item.length - 1] == pre) {
        path.push([...item, cur])
      }
    })
  }
  console.log(pre, cur, dis)
})
// console.log(path)


demo.DFS('a', (pre, cur, dis) => {
  // console.log(pre, cur)
})
