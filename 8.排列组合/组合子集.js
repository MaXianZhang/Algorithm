const lg = console.log
/**
 * @param { 给定一个具有不同元素的集合，找到它的所有不同的子集。 }
 * @return {  }
  */

const find_subsets_mine = function(nums) {
  let subsets = [];
  subsets.push([])
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const addElems = subsets.map(item => {
      return [...item, element]
    })
    subsets = [...subsets, ...addElems]
  }
  lg(subsets)

  return subsets;
};

function find_subsets(nums) {
  const subsets = [];
  // start by adding the empty subset
  subsets.push([]);
  for (i = 0; i < nums.length; i++) {
    currentNumber = nums[i];
    // we will take all existing subsets and insert the current number in them to create new subsets
    const n = subsets.length;
    for (j = 0; j < n; j++) {
      // create a new subset from the existing subset and insert the current element to it
      const set = subsets[j].slice(0); // clone the permutation
      set.push(currentNumber);
      subsets.push(set);
    }
  }

  return subsets;
}

console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3]);
result.forEach((subset) => {
  console.log(subset);
});