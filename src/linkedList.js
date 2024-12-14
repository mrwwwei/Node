class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // 在链表头部添加节点
    addToHead(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // 在链表尾部添加节点
    addToTail(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    // 查找节点是否存在
    contains(data) {
      let current = this.head;
      while (current) {
        if (current.data === data) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  
    // 删除节点（以删除指定数据的节点为例）
    remove(data) {
      if (!this.head) {
        return;
      }
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next && current.next.data!== data) {
        current = current.next;
      }
      if (current.next) {
        current.next = current.next.next;
      }
    }
  
    // 遍历链表并打印节点数据
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  const linkedList = new LinkedList();
  linkedList.addToHead(1);
  linkedList.addToTail(2);
  linkedList.addToTail(3);
  
  linkedList.printList(); // 输出 1 2 3
  linkedList.remove(2);
  linkedList.printList(); // 输出 1 3
  
  module.exports = {
    linkedList
  };