import { serialize } from "v8";
import { runInNewContext } from "vm";

class TreeNode<T>{
  value: T
  left?: TreeNode<T> | null;
  right?: TreeNode<T> | null;
  constructor(val: T) {
    this.value = val
    this.left = null
    this.right = null
  }
}

class BST<T> {
  root: TreeNode<Number | String>;
  count: number
  value!: Number | String;
  constructor(value: Number | String) {
    this.root = new TreeNode(value);
    this.count = 1;
  }
  size() {
    return this.count
  }
  insert(value: Number | String) {
    this.count++;
    let newNode = new TreeNode(value)
    console.log("value to add: ", value)
    const searchTree = (node: TreeNode<Number | String>) => {
      // if value < TreeNode.value go left
      if (value < node.value) {
        if (!node.left) {
          console.log("add left")
          node.left = newNode
        } else {
          searchTree(node)
        }
      }
      // if value > TreeNode.value go right
      if (value >= node.value){
        if (!node.right){
          console.log("add right")
          node.right = newNode
        } else {
          searchTree(node)
        }
      }
    }
    searchTree(this.root)
  }
  remove(value: Number | String) {
    this.count--;
  }
  min() {

  }
  max() {

  }
  contains() {

  }
  dfs(value: Number) {

  }

}

const tree = new TreeNode(12);
tree.left = new TreeNode(7);
tree.left.left = new TreeNode(9);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(8);
tree.right.right = new TreeNode(10);


const traverse = (root: TreeNode<Number | String>) => {
  let result = []
  if (root == null) return result
  
}

let newNode = new BST(12)
newNode.insert(10)
newNode.insert(14)
console.log(newNode)
// console.log(tree)

  // [ 12, [7,[9],], [3,[8],[10] ] ] 