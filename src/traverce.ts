import { serialize } from "v8";
import { runInNewContext } from "vm";

class TreeNode<T>{
  value: T | null
  left!: TreeNode<T> | null;
  right!: TreeNode<T> | null;
  constructor(...val: T[]) {
    this.left = null
    this.right = null
    if (val.length > 0) {
      this.value = val[0];
    } else {
      this.value = null;
    }
  }
}

class BST<T> {
  root!: TreeNode<number | string>;
  count!: number
  value!: number | string;

  constructor(...value: string[]) {
    this.count = 0;
    if (value.length > 0) {
      this.root = new TreeNode(value[0]);
    } else {
      this.root = new TreeNode();
    }
  }
  size() {
    return this.count
  }

  insert(value: number | string) {
    let newLeaf = new TreeNode(value)
    let searchTree = (node: TreeNode<number | string>) => {
      if (node.value === null) {
        this.count++
        this.root = newLeaf
      } else {
        // if value < current node value go left
        if (value < node.value) {
          if (node.left !== null) {
            searchTree(node.left)
          } else {
            this.count++
            node.left = newLeaf
          }
        }
        // if value > current node value go right
        if (value > node.value) {
          if (node.right !== null) {
            searchTree(node.right)
          } else {
            this.count++
            node.right = newLeaf
          }
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

let newTree = new BST()

let arr = [12, 7, 9, 3, 8, 10]

arr.forEach(item => {
  newTree.insert(item)
})

console.log(newTree)


  // [ 12, [7,[9],], [3,[8],[10] ] ] 