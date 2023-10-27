export var intlen = function (num) {
    let len = 0;
    while (num) {
        num = Math.floor(num / 10);
        len++;
    }
    return len;
};
//# sourceMappingURL=intlen.js.map