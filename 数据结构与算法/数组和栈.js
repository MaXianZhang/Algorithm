const data = [[1,3], [3,4,6,2], [4,3,4,9]];
function 排列组合(dataI, str) {
  if(data[dataI])
    var arr = data[dataI]
  else
    return
  const next = ++dataI

  arr.forEach(item => {
    if(dataI == data.length)
      console.log(str + item)
      排列组合(next, str + item + ' ')
  })
}
排列组合(0, '')


