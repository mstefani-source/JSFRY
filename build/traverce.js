"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor(value) {
        this.root = new TreeNode(value);
        this.count = 1;
    }
    size() {
        return this.count;
    }
    insert(value) {
        this.count++;
        let newNode = new TreeNode(value);
        console.log("value to add: ", value);
        const searchTree = (node) => {
            // if value < TreeNode.value go left
            if (value < node.value) {
                if (!node.left) {
                    console.log("add left");
                    node.left = newNode;
                }
                else {
                    searchTree(node);
                }
            }
            // if value > TreeNode.value go right
            if (value >= node.value) {
                if (!node.right) {
                    console.log("add right");
                    node.right = newNode;
                }
                else {
                    searchTree(node);
                }
            }
        };
        searchTree(this.root);
    }
    remove(value) {
        this.count--;
    }
    min() {
    }
    max() {
    }
    contains() {
    }
    dfs(value) {
    }
}
const tree = new TreeNode(12);
tree.left = new TreeNode(7);
tree.left.left = new TreeNode(9);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(8);
tree.right.right = new TreeNode(10);
const traverse = (root) => {
    let result = [];
    if (root == null)
        return result;
};
let newNode = new BST(12);
newNode.insert(10);
newNode.insert(14);
console.log(newNode);
// console.log(tree)
// [ 12, [7,[9],], [3,[8],[10] ] ] 
//# sourceMappingURL=traverce.js.map