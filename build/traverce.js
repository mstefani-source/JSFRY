"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(...val) {
        this.left = null;
        this.right = null;
        if (val.length > 0) {
            this.value = val[0];
        }
        else {
            this.value = null;
        }
    }
}
class BST {
    constructor(...value) {
        this.count = 0;
        if (value.length > 0) {
            this.root = new TreeNode(value[0]);
        }
        else {
            this.root = new TreeNode();
        }
    }
    size() {
        return this.count;
    }
    insert(value) {
        let newLeaf = new TreeNode(value);
        let searchTree = (node) => {
            if (node.value === null) {
                this.count++;
                this.root = newLeaf;
            }
            else {
                // if value < current node value go left
                if (value < node.value) {
                    if (node.left !== null) {
                        searchTree(node.left);
                    }
                    else {
                        this.count++;
                        node.left = newLeaf;
                    }
                }
                // if value > current node value go right
                if (value > node.value) {
                    if (node.right !== null) {
                        searchTree(node.right);
                    }
                    else {
                        this.count++;
                        node.right = newLeaf;
                    }
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
let newTree = new BST();
let arr = [12, 7, 9, 3, 8, 10];
arr.forEach(item => {
    newTree.insert(item);
});
console.log(newTree);
// [ 12, [7,[9],], [3,[8],[10] ] ] 
//# sourceMappingURL=traverce.js.map