class TreeNode{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BinaryTree{
    constructor(){
        this.root=null;
    }
    insert(data){
        const newNode=new TreeNode(data);
        if(!this.root){
            this.root=newNode;
            return;
        }
        let current=this.root;
        while(true){
            if(data<current.data){
                if(!current.left){
                    current.left=newNode;
                    break;
                }
                current=current.left;
            }else{
                if(!current.right){
                    current.right=newNode;
                    break;
                }
                current=current.right;
            
            }
        }
    }
    inorderTraversal(node=this.root){
        if(node){
            this.inorderTraversal(node.left);
            console.log(node.data);
            this.inorderTraversal(node.right);
        }
    }
    preorderTraversal(node=this.root){
        if(node){
            console.log(node.data);
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }
    postorderTraversal(node=this.root){
        if(node){
            this.postorderTraversal(node.left);
            this.inorderTraversal(node.right);
            console.log(node.data);
        }
    }
}


const binaryTree=new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);


console.log('中序遍历');
binaryTree.inorderTraversal();
binaryTree.preorderTraversal();
binaryTree.postorderTraversal();

module.exports={binaryTree};