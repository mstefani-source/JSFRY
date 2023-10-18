export var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    let xst = x + '';
    let polindrome = '';
    for (let i = xst.length - 1; i >= 0; i--) {
        polindrome = polindrome + xst[i];
    }
    return polindrome === xst ? true : false;
};
//# sourceMappingURL=polindrome.js.map