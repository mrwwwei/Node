// 对象的创建
const person = {
    name: 'Alice',
    age: 30,
    hobbies: ['reading', 'traveling']
  };
  
  // 访问对象属性
  console.log(person.name); // 输出 'Alice'
  
  // 修改对象属性
  person.age = 31;
  console.log(person); // 输出 { name: 'Alice', age: 31, hobbies: ['reading', 'traveling'] }
  
  // 添加新属性
  person.city = 'New York';
  console.log(person); // 输出 { name: 'Alice', age: 31, hobbies: ['reading', 'traveling'], city: 'New York' }
  
  // 删除对象属性
  delete person.city;
  console.log(person); // 输出 { name: 'Alice', age: 31, hobbies: ['reading', 'traveling'] }
  
  // 遍历对象的属性（使用for...in循环）
  for (const key in person) {
    console.log(key, person[key]);
  }
  
  // 判断对象是否具有某个属性（使用hasOwnProperty方法）
  console.log(person.hasOwnProperty('name')); // 输出 true
  console.log(person.hasOwnProperty('gender')); // 输出 false
  
  module.exports = {
    person
  };