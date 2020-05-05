const lg = console.log

function isNumber(str) {
  return str.toUpperCase() === str
}
/**
 * @param { 给定一个字符串，找出它所有的排列，保留字符序列但改变大小写。 }
 * @return { 独立按照模版完成，真TM棒 }
  */

function find_letter_case_string_permutations_mine(str) {
  const permutations = [''];

  for (currentStr of str) {
    const n = permutations.length
    for (let i = 0; i < n; i++) {
      const permutation = permutations.shift();
      const copy = permutation
      if (!isNumber(currentStr)) {
        permutations.push(copy + currentStr.toUpperCase())
      }
      permutations.push(copy + currentStr)
    }
  }
  return permutations;
}

function find_letter_case_string_permutations(str) {
  permutations = [];
  permutations.push(str);
  // process every character of the string one by one
  for (i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i], 10))) { // only process characters, skip digits
      // we will take all existing permutations and change the letter case appropriately
      const n = permutations.length;
      for (j = 0; j < n; j++) {
        const chs = permutations[j].split(''); // string to array
        // if the current character is in upper case, change it to lower case or vice versa
        if (chs[i] === chs[i].toLowerCase()) {
          chs[i] = chs[i].toUpperCase();
        } else {
          chs[i] = chs[i].toLowerCase();
        }
        permutations.push(chs.join(''));
      }
    }
  }

  return permutations;
}


console.log(`String permutations are: ${find_letter_case_string_permutations('ad52')}`);
console.log(`String permutations are: ${find_letter_case_string_permutations('ab7c')}`);

function render() {
  function renderSubmenu(list) {
    return list.map((item, index) => {
      if (item.children) {
        return (
          <un-submenu index={String(index)}>
            <template slot="title">
              <span>{item.label}</span>
            </template>
            {renderSubmenu(item.children)}
          </un-submenu>)
      } else {
        return (
          <un-menu-item index={item.name}>
            <span slot="title">{item.label}</span>
          </un-menu-item>)
      }
    })
  }
  return (
    <un-row>
      <un-col>
        <un-menu onSelect={this.handleSelect}>
          {renderSubmenu(this.tabs)}
        </un-menu>
      </un-col>
    </un-row>
  )
}