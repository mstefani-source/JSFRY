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
  root?: TreeNode<Number | String>;
  count!: number
  value!: Number | String | null;
  
  
  constructor(...value:String[]) {
    if (value.length === 1){
      this.root = new TreeNode(value[0]);
      this.count = 1;
    }else if (value.length === 0) {
      this.root = undefined
      this.count = 0
    }
  }
  size() {
    return this.count
  }

  insert(value: Number | String) {
    this.count++;
    let newNode = new TreeNode(value)

    const searchTree = (node: TreeNode<String | Number> | undefined) => {
      if (node && value < node.value) {
        if (!node.left) {
          node!.left = newNode
        } else {
          searchTree(node!.left)
        }
      }
      if (node && value >= node!.value){
        if (!node.right){
          node.right = newNode
        } else {
          searchTree(node.right)
        }
      }
    }
    if (this.root !== undefined) {
      searchTree(this.root)
    } else {
      this.root = newNode
    }
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

const traverse = (root: TreeNode<Number | String>) => {
  let result = []
  if (root == null) return result
  
}

let newTree = new BST()

let arr = [12, 7, 9, 3, 8, 10]

arr.forEach(item => {
  newTree.insert(item)
})

console.log(newTree)


  // [ 12, [7,[9],], [3,[8],[10] ] ] 