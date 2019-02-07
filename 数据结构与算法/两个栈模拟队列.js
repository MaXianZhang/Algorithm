const cur = []
const pocket = []


function push(node) {
  cur.push(node)
  return cur.length
}

function pop() {
  let len = cur.length
  for(var i = 0; i < len; i++) {
    pocket.push(cur.pop())
  }
  const res = pocket.pop()
  len = pocket.length
  for(var i = 0; i < len; i++) {
    cur.push(pocket.pop())
  }
  return res
}
push(1)
push(1)
push(2)
pop()


console.log(cur)