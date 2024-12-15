const {BinaryTree}=require('../src/binaryTree.js');
describe('binary.test',()=>{
    // init tree before every test

    beforeAll(() => {
    })

    test('binary.add',()=>{
      let binaryTree=new BinaryTree();
        binaryTree.insert(5);
        binaryTree.insert(3);
        binaryTree.insert(7);
        binaryTree.insert(2);
        binaryTree.insert(4);

      binaryTree.insert(6);

      expect(binaryTree.root.right.left).toBeDefined();
      expect(binaryTree.root.right.left.data).toEqual(6);
    });
  
    test('binary.medium',()=>{
      let binaryTree=new BinaryTree();
        binaryTree.insert(5);
        binaryTree.insert(3);
        binaryTree.insert(7);
        binaryTree.insert(2);
        binaryTree.insert(4);
      let result=[];
      const inSpy=jest.spyOn(binaryTree,'inorderTraversal');

      inSpy.mockImplementation((node)=>{
        if (node){
          binaryTree.inorderTraversal(node.left);
          result.push(node.data);
          binaryTree.inorderTraversal(node.right);
        }
      });

      inSpy(binaryTree.root)
      expect(result).toEqual([2,3,4,5,7])
    });
  
    // test('binary.preorder',()=>{
    //   const result=[];
    //   const preSpy=jest.spyOn(binaryTree,'preorderTraversal');
    //   preSpy.mockImplementation((node)=>{
    //     if (node){
    //       result.push(node.data);
    //       binaryTree.preorderTraversal(node.left);
    //       binaryTree.preorderTraversal(node.right);
    //     }
    //   });
    //   binaryTree.preorderTraversal();
    //   expect(result).toEqual([5,3,2,4,6,7]);
    
    // })
  
    // test('binary.post',()=>{
    //   const result=[];
    //   const postSpy=jest.spyOn(binaryTree,'postorderTraversal');
    //   postSpy.mockImplementation((node)=>{
    //     if (node){
    //       binaryTree.postorderTraversal(node.left);
    //       binaryTree.postorderTraversal(node.right);
    //       result.push(node.data);
    //     }
    //   });
    //   binaryTree.postorderTraversal();
    //   expect(result).toEqual([2,4,3,7,6,5])
    // })
  })