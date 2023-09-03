class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(!this.root) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;
    let stop = 0;

    while(stop === 0) {
      if (current === null && val < current.val) {
        current.left = new Node(val);
        stop++;
      } else if (current === null && val > current.val) {
        current.right = new Node(val)
        stop++;
      } else if (!current.left && val < current.val) {
        current.left = new Node(val);
        stop++;
      } else if (!current.right && val > current.val) {
        current.right = new Node(val);
        stop++;
      }else if (val < current.val) {
        current = current.left
      } else if (val > current.val) {
        current = current.right
      }
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

    if(!this.root) {
      this.root = new Node(val);
      return this;
    }

    function insertHelper(node) {
      if (!node.left && val < node.val) {
        node.left = new Node(val)
      } else if (!node.right && val > node.val) {
        node.right = new Node(val)
      } else if (val < node.val) {
        insertHelper(node.left)
      } else if (val > node.val) {
        insertHelper(node.right)
      }
    }

    insertHelper(this.root);
    return this;

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    let toVisit = [this.root];

    while (toVisit.length) {
      let current = toVisit.shift();

      if (!current) {
        return undefined;

      }

      if (current.val === val) {
        return current;
      }

      if (val < current.val) {
        toVisit.push(current.left);
      } else if (val > current.val) {
        toVisit.push(current.right);
      }
    }
    
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

    function findHelper(node) {

      if(node === null) return undefined;
      
      if (val > node.val) {
        if (!node.right) return undefined;
        return findHelper(node.right);
      } else if (val < node.val) {
        if (!node.left) return undefined;
        return findHelper(node.left);
      }

      return node;

    }

    return findHelper(this.root);

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];

    function traverse(node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }

    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let toVisitQueue = [this.root];
    let visited = [];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current) {
        visited.push(current.val);

        toVisitQueue.push(current.left);
        toVisitQueue.push(current.right);        
      }

    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
