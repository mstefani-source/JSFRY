var node = /** @class */ (function () {
    function node(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
    return node;
}());
var BST = /** @class */ (function () {
    function BST(value) {
        this.root = new node(value);
        this.weight = 1;
    }
    BST.prototype.size = function () {
        return this.size;
    };
    BST.prototype.add = function (value) {
        this.weight++;
        var searchTree = function (node) {
        };
        searchTree(this.root);
    };
    BST.prototype.remove = function (value) {
    };
    BST.prototype.consist = function (value) {
    };
    return BST;
}());
