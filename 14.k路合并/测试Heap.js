const Heap = require('collections/heap');


const minHeap = new Heap([], null, ((a, b) => b - a));

minHeap.push(2);
minHeap.push(3);
minHeap.push(1);


console.log(minHeap)


// const node = minHeap.pop();

// console.log(node)

console.log(minHeap.peek())
// console.log(minHeap.toAarry())
console.log(minHeap.length)


