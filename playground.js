var log = console.log

matrix = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0],
]

var maximalSquare = function (matrix) {
  var dp = []
  var lenX = matrix[0].length
  var lenY = matrix.length


  for (var i = 0; i < lenY; i++) {
    dp[i] = []
    dp[i][0] = matrix[i][0]
  }
  dp[0] = matrix[0]



  for (var i = 1; i < lenY; i++) {
    for (var j = 1; j < lenX; j++) {
      var top = dp[i - 1][j]
      var left = dp[i][j - 1]
      var topleft = dp[i - 1][j - 1]
      var cur = matrix[i][j]
      if(cur === 1) {
        if(top === left && left === topleft && topleft === top) {
          dp[i][j] = top + 1
        } else {
          dp[i][j] = 1
        }
      } else {
        dp[i][j] = 0
      }
    }
  }
  log(dp)


  

};

log(maximalSquare(matrix))