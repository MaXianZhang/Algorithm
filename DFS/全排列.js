// var result = [];
// function Permutation(str){
//     result = []
//     if(str.length<=0) return result;
//     var sortTmp = "";
//     var arr = str.split("");
//     result = sortString(arr, sortTmp)
//     return result;
// }
 
// function sortString(arr,sortTmp){
//     if(arr.length ==0 ){
//         result.push(sortTmp);
//     }else{
//         var isRepeated = {}
//         for(var i = 0; i<arr.length; i++) { 
//             if(!isRepeated[arr[i]]){
//                 var p = arr.splice(i,1)[0];
//                 sortTmp += p;
//                 // console.log(arr, sortTmp,  i)

//                 sortString(arr,sortTmp);
//                 arr.splice(i,0,p); //恢复字符串
//                 sortTmp = sortTmp.slice(0,sortTmp.length-1);
//                 isRepeated[p] = true;
//             }
//         }
//     }
//     return result;
// }

// console.log(Permutation('abcd'))

let demo = ['a', 'b', 'b']
let len = demo.length

let arr = [], book = []

function dfs(step) {
    if (step == len) {
        console.log(arr)
        return 
    }
    for (let i = 0; i < len; i++) {
        let cur = demo[i]
        if(!book[i]) {
            // && arr.indexOf(cur) !== -1
            arr[step] = cur
            book[i] = cur
        console.log('book', book)

            dfs(step + 1)
            book[i] = 0
        }
    }
}

dfs(0)

