function qSort(arr) {
  if (arr.length <= 1) return arr
  let flag = arr[Math.floor(arr .length / 2)]
  let [left, right, middle] = [[], [], []]
  arr.forEach(item => {
    if (item < flag) left.push(item)
    if (item == flag) middle.push(item)
    if (item > flag) right.push(item)
  })
  return [...qSort(left), ...middle, ...qSort(right)]
}

ll(qSort([41,3,21,7,8,94,345,2,13,234,123,52,3,45]))