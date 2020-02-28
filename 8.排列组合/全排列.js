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
 * @param { 自己探索 }
  */

const find_permutations = function (nums) {

    nums.forEach(num => {
        
    })

    result = [];
    // TODO: Write your code here
    return result;
};


console.log(`Here are all the permutations: ${find_permutations([1, 3, 5])}`)