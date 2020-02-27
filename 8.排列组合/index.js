const data = [[1,3], [3,4,6,2], [4,3,4,9]];
function demo(dataI, str) {
  if(data[dataI])
    var arr = data[dataI]
  else
    return
  const next = ++dataI

  arr.forEach(item => {
    if(dataI == data.length)
      console.log(str + item)
      demo(next, str + item + ' ')
  })
}
demo(0, '')
/**
 * @param { 排列组合 }
 * @return {   }
  */

// const Subsets = require('./组合子集')
const SubsetsWithDuplicates = require('./有重复项的子集')
// const ZigzagTraversal = require('./锯齿遍历')
// const ConnectLevelOrderSiblings = require('./连接级别顺序同级')
 
const lg = console.log