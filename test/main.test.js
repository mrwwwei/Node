const { add } = require('../src/main.js');

test('测试加法函数', () => {
  expect(add(1, 2)).toBe(3);
});

const myArray = require('../src/array.js');

test('测试数组修改元素',()=>{
    myArray[0]=2
    expect(myArray[0]).toBe(2);
});

test('测试push',()=>{
  const mlength=myArray.length;
  myArray.push(8);
  expect(myArray.length).toBe(mlength+1);
  expect(myArray[myArray.length-1]).toBe(8);
});

test('测试pop',()=>{
  const mypop=myArray.pop();
  expect(typeof mypop).toBe('number')
  expect(myArray.length).toBe(myArray.length+1-1);
});

test('unshift',()=>{
  const mylength=myArray.length;
  myArray.unshift(5);
  expect(myArray.length).toBe(mylength+1);
  expect(myArray[0]).toBe(5);
});

test('splice',()=>{
  const mylength=myArray.length;
  myArray.splice(1,2);
  expect(myArray.length).toBe(mylength-2);

})


test('splice.替换元素',()=>{
  myArray.splice(1,1,9,9);
  expect(myArray[1]).toBe(9)
  expect(myArray[2]).toBe(9);
});

test('indexof',()=>{
  const index=myArray.indexOf(9);
  expect(index).toBeGreaterThanOrEqual(0);
});

//对象（Object)
const {person}=require('../src/object.js');

describe('Object Tests',()=>{
  test('访问',()=>{
    expect(person.name).toBe('Alice');
  });

  test('object.edit',()=>{
    person.age=32;
    expect(person.age).toBe(32);
  });


  test('object.add',()=>{
    person.job='Engineer';
    expect(person.hasOwnProperty('job')).toBe(true );
  });

  test('object.delete',()=>{
    delete person.job;
    expect(person.hasOwnProperty('job')).toBe(false);
  });

  test('object.for',()=>{
    let propertyCount=0;
    for(const key in person){
      propertyCount++;
    }
    expect(propertyCount).toBeGreaterThan(0);
  });
});

//stack
const {stack}=require('../src/stack.js')

describe('stack test',()=>{
  test('stack.push',()=>{
    stack.push(4);
    expect(stack.peek()).toBe(4);
    expect(stack.size()).toBe(1);
  });

  test('stack.pop',()=>{
    const pope=stack.pop();
    expect(typeof pope).toBe('number');
    expect(stack.size()).toBe(0);
  });

  test('stack.peek',()=>{
    expect(stack.peek()).toBe();
  })

})



//queue

const {queue} =require('../src/queue.js');

describe('queue test',()=>{
  test('queue.enqueue',()=>{
    queue.enqueue(4);
    expect(queue.front()).toBe(1);
    expect(queue.size()).toBe(4);
  });

  test('queue,dequeue',()=>{
    const deque=queue.dequeue();
    expect(typeof deque).toBe('number');
    expect(queue.front()).toBe(3);
    expect(queue.size()).toBe(3);
  });

  test('queue.front',()=>{
    expect(queue.front()).toBe(3);

  });
})


//linkedlist

const {linkedList}=require('../src/linkedList.js')

describe('linkedlist test',()=>{
  test('link.headadd',()=>{
    linkedList.addToHead(0);
    expect(linkedList.head.data).toBe(0);
  });

  test('link.tailadd',()=>{
    linkedList.addToTail(4);
    let current=linkedList.head;
    while (current.next){
      current=current.next;
    }
    expect(current.data).toBe(4);
  });

  test('link.delete',()=>{
    linkedList.remove(1);
    expect(linkedList.contains(1)).toBe(false);

  });

  
});


//binarytree

const {binaryTree}=require('../src/binaryTree.js');

describe('binary.test',()=>{
  test('binary.add',()=>{
    binaryTree.insert(6);
    expect(binaryTree.root.right.right).toBeDefined();

  });

  test('binary.medium',()=>{
    const result=[];
    const inSpy=jest.spyOn(binaryTree,'inorderTraversal');
    inSpy.mockImplementation((node)=>{
      if (node){
        binaryTree.inorderTraversal(node.left);
        result.push(node.data);
        binaryTree.inorderTraversal(node.right);
      }
    });
    binaryTree.inorderTraversal();
    expect(result).toEqual([2,3,4,5,6,7])
    console.log(result)
  });

  test('binary.preorder',()=>{
    const result=[];
    const preSpy=jest.spyOn(binaryTree,'preorderTraversal');
    preSpy.mockImplementation((node)=>{
      if (node){
        result.push(node.data);
        binaryTree.preorderTraversal(node.left);
        binaryTree.preorderTraversal(node.right);
      }
    });
    binaryTree.preorderTraversal();
    expect(result).toEqual([5,3,2,4,6,7]);
  
  })

  test('binary.post',()=>{
    const result=[];
    const postSpy=jest.spyOn(binaryTree,'postorderTraversal');
    postSpy.mockImplementation((node)=>{
      if (node){
        binaryTree.postorderTraversal(node.left);
        binaryTree.postorderTraversal(node.right);
        result.push(node.data);
      }
    });
    binaryTree.postorderTraversal();
    expect(result).toEqual([2,4,3,7,6,5])
  })
})


//set
const {mySet} = require('../src/set.js');
describe('Set .test',()=>{
  test('set.add',()=>{
    mySet.add(3);
    mySet.add(4);
    expect(mySet.size).toBe(3);
  });
  test('set.delete',()=>{
    mySet.delete(2);
    expect(mySet.has(2)).toBe(false);
    expect(mySet.size).toBe(2);
  });

  
});


//map

const {mymap}=require('../src/map.js');

describe('Map test',()=>{
  test('map.add',()=>{
    mymap.set('gender','male');
    expect(mymap.get('gender')).toBe('male');
  });

  test('map.delete',()=>{
    mymap.delete('name');
    expect(mymap.has('name')).toBe(false);
  });


})