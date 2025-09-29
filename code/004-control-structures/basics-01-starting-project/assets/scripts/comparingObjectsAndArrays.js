// Objects can store the same value, but they are different by itself.
obj1 = { name: 'David' };
obj2 = { name: 'David' };
console.log(obj1 === obj2); // false

// Same for arrays.
array1 = [1, 2, 3];
array2 = [1, 2, 3];
console.log(array1 === array2); // false
