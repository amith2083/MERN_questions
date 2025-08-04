class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
//implementation-----------------------------------------------------------------------------------------------------------------------------
function insertNode(root, val) {
    if (!root) return new TreeNode(val); // Base case: empty tree

    if (val < root.val) {
        root.left = insertNode(root.left, val);
    } else if (val > root.val) {
        root.right = insertNode(root.right, val);
    }

    return root; // Return the updated tree
}
// Create root
let root = new TreeNode(10);

// Insert nodes
insertNode(root, 5);
insertNode(root, 15);
insertNode(root, 3);
insertNode(root, 7);
insertNode(root, 12);
insertNode(root, 18);

let root2 = new TreeNode(10);

// Insert nodes
insertNode(root2, 5);
insertNode(root2, 15);
insertNode(root2, 3);
insertNode(root2, 7);
insertNode(root2, 12);
insertNode(root2, 18);

//Bfs------------------------------------------------------------------------------------------------------------------------------------
function levelOrderTraversal(root) {
    if (!root) return;
    
    const queue = [root];
    
    while (queue.length > 0) {
        let node = queue.shift(); // Remove first element (FIFO)
        console.log(node.val);
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}


console.log("Level Order Traversal Output:");
levelOrderTraversal(root);

//check BST or not-------------------------------------------------------------------------------------------------------------------------
function isValidBSTLevelOrder(root) {
    if (!root) return true; // An empty tree is a BST

    const queue = [{ node: root, min: -Infinity, max: Infinity }];

    while (queue.length > 0) {
        let { node, min, max } = queue.shift(); // Dequeue element
        
        if (node.val <= min || node.val >= max) return false; // Violates BST rule

        if (node.left) queue.push({ node: node.left, min, max: node.val });  // Left child range: min → node.val
        if (node.right) queue.push({ node: node.right, min: node.val, max }); // Right child range: node.val → max
    }

    return true; // No violations found, it's a BST
}
  console.log(isValidBSTLevelOrder(root))


  //-------------kth smallest element------------------------------------------------------------------------------------------
  function smallest (root, k) {
    const result =[]
    const queue =[root]
    while(queue.length>0){
        const node = queue.shift()
        result.push(node.val)
        if(node.left){
            queue.push(node.left)
        }
         if(node.right){
            queue.push(node.right)
        }

    }
    result.sort((a,b)=>
    a-b )

    return result[k-1]
    
};
console.log(smallest(root,2))

//search------------------------------------------------------------------------------------------------------------------------
function search(root,target){
    if(!root){
        return false;
    }
    const queue = [root];
    while(queue.length>0){
        const node=queue.shift();
        if(node.val===target){
            return true
        }
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
        }
        return false
}

console.log(search(root,22));
//isidentical--------------------------------------------------------------------------------------------------------------------------

function isIdentical(root,root2){
    if(!root && !root2){
        return true
    }
    if(root && root2){
        return (root.val===root2.val && isIdentical(root.left,root2.left)&& isIdentical(root.right,root2.right))

    }
    
    return false
}
console.log('isIdentical', isIdentical(root,root2))

//subtree-----------------------------------------------------------------------------------------------------------------------------
function isSubtree(root,root2){
    if(!root2){
        return true
    }
    if(!root){
        return false
    }
    const queue= [root]
    while(queue.length>0){
    const node = queue.shift()
    if(isIdentical(node,root2)){
        return true
    }
    if(node.left){
        queue.push(node.left)
    }
    if(node.right){
        queue.push(node.right)
    }
    }
    return false
        
}

// count nodes --------------------------------------------------------------------------------------------------------------
function countNodes(root){
    if (!root) return 0; // If the tree is empty, return 0.

let count = 0;
const queue = [root]; 

while (queue.length > 0) {
    const node = queue.shift(); 
    count++; 

   
    if (node.left) queue.push(node.left);

  
    if (node.right) queue.push(node.right);
}

return count;

}
console.log('node count is ',countNodes(root))



function findHeightIterative(root) {
    if (!root) return -1; // Base case: Empty tree has height -1

    let height = -1;
    const queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length; // Number of nodes at the current level

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        height++; // Increase height after each level
    }

    return height;
}

console.log("Height of the tree (Iterative):", findHeightIterative(root));
