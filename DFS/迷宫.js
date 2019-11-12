let map = [
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 2, 0],
  [0, 0, 0, 1],
]
let path = []
let mix = 1000
let dirc = function (x, y) {
  return [
    [x, y + 1],
    [x + 1, y],
    [x, y - 1],
    [x - 1, y],
  ]
}

function dfs(step = 0, x = 0, y = 0) {
  if (path.length > mix) return

  path[step] = [x, y]
  if (map[x][y] === 2) {
    if (path.length < mix) mix = path.length
    return mix
  }

  dirc(x, y).forEach(([nextX, nextY]) => {
    if (map[nextX] && map[nextX][nextY] === 0) {
      map[nextX][nextY] = 3
      dfs(step + 1, nextX, nextY)
      map[nextX][nextY] = 0
    } else if (map[nextX] && map[nextX][nextY] === 2) {
      dfs(step + 1, nextX, nextY)
    }
  })
}

dfs()

console.log(mix)


