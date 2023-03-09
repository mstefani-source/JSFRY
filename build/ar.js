class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const tree = new TreeNode(12);
tree.left = new TreeNode(7);
tree.left.left = new TreeNode(9);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(8);
tree.right.right = new TreeNode(10);

/**
 * @typedef {Object} TreeNode
 * @property {Number} value 
 * @property {TreeNode | null} left 
 * @property {TreeNode | null} right 
 */
/**
 * @param {TreeNode} root
 * @return {Number[][]}
 */
const traverse = (root) => {
	// реализуй метод traverse
	let res = [];
	let level = 0;
	searchTree = (node) => {
		if (node.value) {
			if (res[level] == undefined) {
				res[level] = [node.value]
			}else{
				res[level] = res[level].concat([node.value])
			}
			level++			
		}
		if (node.left) {
			searchTree(node.left)
			level--
		}
		if (node.right) {
			searchTree(node.right)
			level--
		}
	}
	searchTree(root)
	return res
}

console.log("[[12], [7, 3], [9, 8, 10]]")
console.log(traverse(tree))