/**
 * @param { 给定一组不同的数字，找出它的所有排列。 }
 * @param { 以前的解法 }
 * @return {  }
  */
// let demo = ['a', 'b', 'b']
// let len = demo.length

// let arr = [], book = []

// function dfs(step) {
//     if (step == len) {
//         console.log(arr)
//         return 
//     }
//     for (let i = 0; i < len; i++) {
//         let cur = demo[i]
//         if(!book[i]) {
//             // && arr.indexOf(cur) !== -1
//             arr[step] = cur
//             book[i] = cur
//         console.log('book', book)

//             dfs(step + 1)
//             book[i] = 0
//         }
//     }
// }


// dfs(0)

/**
 * @param { 给定一组不同的数字，找出它的所有排列。 }
 * @return { 写一个插入函数 }
 * @return { 深搜 }
 * @return { 插入的位置不同导致了不同的顺序，从而找到全部的排列方式 }
  */

function insertAfter(arr, i, elem) {
  const rest = arr.splice(i)
  arr.push(elem, ...rest)
  return arr
}

function find_permutations(nums) {
  let numsLength = nums.length,
    result = [],
    permutations = [];
  permutations.push([]);
  // 广搜 纵向
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    // we will take all existing permutations and add the current number to create new permutations
    const n = permutations.length;
    console.log('permutations：', permutations, i)
    // 广搜 横向
    for (let p = 0; p < n; p++) {
      const oldPermutation = permutations.shift();
      // create a new permutation by adding the current number at every position

      for (let j = 0; j < oldPermutation.length + 1; j++) {
        const newPermutation = oldPermutation.slice(0); // clone the permutation
        newPermutation.splice(j, 0, currentNumber); // insert currentNumber at index 'j'
        console.log('new',newPermutation)
        if (newPermutation.length === numsLength) {
          result.push(newPermutation);
        } else {
          permutations.push(newPermutation);
        }
      }
    }
  }

  return result;
}

console.log('Here are all the permutations:');
const result = find_permutations([1, 3, 5]);
result.forEach((permutation) => {
  console.log(permutation);
});