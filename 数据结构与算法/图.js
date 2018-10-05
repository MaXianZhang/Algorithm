

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

  BFS(first, callback) {
    let grey = []
    let black = []

    grey.push(first)

    const take = () => {
      if(grey.length == 0) 
        return  
      let demo = grey.shift()
      callback(demo)
      black.push(demo)
      this.adjList[demo].forEach(item => {
        if (black.indexOf(item) == -1 && grey.indexOf(item) == -1) {
          grey.push(item)
        }
      })
      take()
    }
    take()
  }

  DFS(first, callback) {
    let grey = []
    let black = []

    grey.push(first)

    const take = () => {
      if(grey.length == 0) 
        return  
      let demo = grey.pop()
      callback(demo)
      black.push(demo)
      this.adjList[demo].forEach(item => {
        if (black.indexOf(item) == -1 && grey.indexOf(item) == -1) {
          grey.push(item)
        }
      })
      take()
    }
    take()
  }
}

var demoArr = ['a','b','c','d','e','f','g','h','i'];
var demo = new Graph()

demoArr.forEach(item => {
  demo.addVertex(item)
})

demo.addEage('a', 'b')
demo.addEage('a', 'c')
demo.addEage('c', 'd')
demo.addEage('c', 'g')
demo.addEage('d', 'g')
demo.addEage('d', 'h')
demo.addEage('b', 'e')
demo.addEage('b', 'f')
demo.addEage('e', 'i')

console.log(demo)

demo.BFS('a', item => {
  console.log(item)
})
