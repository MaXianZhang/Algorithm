// let line = readline().split(' ')
// let a = Number(line[0])
// let b = Number(line[1])
// let k = Number(line[2])

function is2(a,b, num) {
  a = String(a)
  b = String(b)
  num = String(num)
  res = true
  for(item of num) {
    if(item != a && item != b) {
      res = false
    }
  }
  return res
}

function is1(a,b, num) {
  a = String(a)
  b = String(b)
  num = String(num)
  let after = 0
  res = true
  for(item of num) {
    after += Number(item)
    if(item != a && item != b) {
      res = false
    }
  }
  if(!res){
    return false
  }

  if(is2(a,b, after)) {
    return true
  } else {
    return false
  }
}

var count = 0

for(i = 10**(k - 1); i < 10**k; i++) {
    if(is1(a,b, i)) {
        count++
    }
}

console.log(count)
