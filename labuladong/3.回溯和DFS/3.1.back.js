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

/** n皇后
 * TODO 结果多了
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const resultList = [];
    // [每行选中的位置]
    const pathArr = [];
    // 斜线方向的占位情况
    const xArr = [];
    const yArr = [];
    const helper = () => {
        // 选完了
        if (pathArr.length === n) {
            resultList.push([...pathArr]);
        }

        for (let i = 0; i < n; i++) {
            // 选择
            const j = pathArr.length;
            if (pathArr.length !== 0) {
                const lastChoise = pathArr[pathArr.length - 1];
                const blackList = [lastChoise, lastChoise + 1, lastChoise - 1, ...pathArr];
                
                if (blackList.includes(i)) {
                    continue;
                }
                if (xArr.includes(i - j)) {
                    continue;
                }
                if (yArr.includes(i + j)) {
                    continue;
                }
            }
            pathArr.push(i);
            xArr.push(i - j);
            yArr.push(i + j);
            // 递归
            helper();
            // 撤销选择
            pathArr.pop();
            xArr.pop();
            yArr.pop();
        }
    }
    
    helper();
    
    return resultList.map(item => {
        const arr = [];
        item.forEach(position => {
            const line = new Array(n).fill('.');
            line[position] = 'Q';
            arr.push(line.join(''));
        })
        return arr;
    });
};

console.log(solveNQueens(5).length)
