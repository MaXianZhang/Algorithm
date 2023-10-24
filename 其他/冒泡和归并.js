//冒泡排序
var uu = 0
function bubbleSort(arr) {
    let i = arr.length, j;
    while (i > 0) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                uu++
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        i--;
    }
    // return arr
    return uu;
}

// 归并排序, 计算逆序对
var ww = 0
function mergeLR(left = [], right = []) {
    let res = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            res.push(right.shift())
            ww += left.length
        } else {
            res.push(left.shift())
        }
    }
    return [...res, ...left, ...right]
}
function mergeSort(arr) {
    arr = arr.map(item => [item])

    while (arr.length > 1) {
        var stack = []
        var len = arr.length
        for (let i = 0; i < len; i += 2) {
            stack.push(mergeLR(arr.shift(), arr.shift()))
        }
        arr = stack.concat(arr)
    }
    return ww % 1000000007
    // return arr.pop()
}