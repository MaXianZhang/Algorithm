function rep(str = '', obj = {}) {
  return str.replace(/({{(.*?)}})/g, (match, str, prop) =>
   obj[prop.trim()] ? obj[prop.trim()] : "#")
}


let str = 'aksdjf {{ name }} as {{age }} df'
let obj = {
  name: 'zhangxu',
  asge: 18,
}
console.log(rep(str, obj))