module.exports = class Heap {
    constructor(type = 'max') {
        this.type = type;
        this.heap = [];
    }

    // 将新元素添加到堆中  
    push(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // 从堆中移除元素  
    pop() {
        if (this.heap.length === 0) {
            return null; // 或者抛出错误  
        }
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return value;
    }

    // 获取堆顶元素，但不移除它  
    peek() {
        return this.heap[0];
    }

    // 将数组转换为堆  
    fromArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.push(arr[i]);
        }
    }

    // 转换为数组  
    toArray() {
        return this.heap;
    }

    // 堆化数组（上）  
    heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (index <= 0 || this.heap[parentIndex] >= this.heap[index]) {
            return; // 父节点大于或等于子节点，无需调整  
        }
        if (this.type === 'min') {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]; // 交换位置  
        } else {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]; // 交换位置  
        }
        this.heapifyUp(parentIndex); // 递归调整父节点  
    }

    // 堆化数组（下）  
    heapifyDown(index) {
        const leftChildIndex = index * 2 + 1; // 左子节点索引  
        const rightChildIndex = index * 2 + 2; // 右子节点索引  
        let smallestIndex = index; // 最小的子节点索引  
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = leftChildIndex; // 更新最小子节点索引为左子节点索引  
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = rightChildIndex; // 更新最小子节点索引为右子节点索引  
        }
        if (smallestIndex !== index) { // 如果最小的子节点不是当前节点，交换它们的位置并递归调整子节点  
            if (this.type === 'min') {
                [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]]; // 交换位置  
            } else {
                [this.heap[smallestIndex], this.heap[index]] = [this.heap[index], this.heap[smallestIndex]]; // 交换位置  
            }
            this.heapifyDown(smallestIndex); // 递归调整最小的子节点  
        }
    }
}

// TODO topK个数字