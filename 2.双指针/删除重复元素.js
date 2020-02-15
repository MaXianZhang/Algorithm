/**
 * @param { 给定一个已排序数字数组，删除其中所有重复的数字。 要求不使用任何额外的空间; 在删除就地重复项之后，返回数组的新长度。}
 * @return { 和滑动窗口一样，我们需要找到两种方式维护两个指针，暴力法其实是用两个循环维护两个指针的 }
 * @return { 在这到题中，一个指针由for循环维护，另一个指针由一个变量维护 }
 * @return { 对比滑动窗口，我们往往要关心窗口中间的东西的变化，而双指针我们关心指针里的东西就可以 }
 * @return { 理解不通畅，reback }
 */
function remove_duplicates(arr) {
  let recorder = 0;

  for(let explorer = 1; explorer < arr.length; explorer++) {
    if(arr[explorer] !== arr[recorder]) {
      arr[recorder + 1] = arr[explorer]
      recorder++
    }
  }
  return recorder + 1;
}

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));
