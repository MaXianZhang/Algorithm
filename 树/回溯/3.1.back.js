/** 46 全排列
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  const resultList = [];

  trackBack([], nums, resultList);

  return resultList;
};

function trackBack(pathArr, toGoArr, resultList) {
  if (toGoArr.every((item) => item === null)) {
    resultList.push([...pathArr]);
    return;
  }

  for (let i = 0; i < toGoArr.length; i++) {
    if (toGoArr[i] === null) {
      continue;
    }
    pathArr.push(toGoArr[i]);
    toGoArr[i] = null;
    trackBack(pathArr, toGoArr, resultList);
    toGoArr[i] = pathArr.pop();
  }
}

// console.log(permute([1, 2, 3]));
