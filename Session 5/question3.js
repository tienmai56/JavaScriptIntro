let array = ['one', 'two', 'three', 'one','one', 'four', 'five', 'four', 'five']
let check_duplicate = [...new Set(array)];

console.log('new set is' + check_duplicate);