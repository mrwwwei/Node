const mySet=new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2);

console.log(mySet.has(1));

mySet.delete(1);


module.exports={mySet};