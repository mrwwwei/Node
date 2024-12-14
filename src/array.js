const myArray = [1,2,3,"hello",true]

console.log(myArray[0])

myArray[1]=4;

myArray.push(6);

const poppedElement=myArray.pop();
const firstelment=myArray.shift();
myArray.splice(1,2);

const index=myArray.indexOf(3);

for(let i = 0; i<myArray.length;i++){
    console.log(Array[i])
}




module.exports=myArray;