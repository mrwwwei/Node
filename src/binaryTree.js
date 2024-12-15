class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(data, node) {
        const newNode = new TreeNode(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = node || this.root
        if (data < current.data) {
            if (!current.left) {
                current.left = newNode;
                return
            }
            return this.insert(data, current.left)
        } else {
            if (!current.right) {
                current.right = newNode;
                return
            }
            return this.insert(data, current.right)
        }
    }
    inorderTraversal(node = this.root) {
        if (node) {
            this.inorderTraversal(node.left);
            this.inorderTraversal(node.right);
        }
    }
    preorderTraversal(node = this.root) {
        if (node) {
            console.log(node.data);
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }
    postorderTraversal(node = this.root) {
        if (node) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.data);
        }
    }
}

module.exports = {
    BinaryTree
};