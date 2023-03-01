class TreeNode<T>{
  value: T
  left?: TreeNode<T> | null;
  right?: TreeNode<T> | null;
  constructor(val: T){
    this.value = val
    this.left = null
    this.right = null
  }
}

const tree = new TreeNode(12);
tree.left = new TreeNode(7);
tree.left.left = new TreeNode(9);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(8);
tree.right.right = new TreeNode(10);


const traverse = (root) => {
  let result = []
    if (root == null) return result

}


console.log(traverse(tree)); // [[12], [7, 3], [9, 8, 10]]

  // [ 12, [7,[9],], [3,[8],[10] ] ] 