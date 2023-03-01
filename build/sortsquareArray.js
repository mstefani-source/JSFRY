const sortSquareArray = (arr) => {
    let indexFromEnd = arr.length - 1;
    let indexFromStart = 0;
    return arr.reduce(function (acc, item, index, initarr) {
        if (Math.abs(initarr[indexFromStart]) > Math.abs(initarr[indexFromEnd])) {
            acc.unshift(Math.pow(Math.abs(initarr[indexFromStart]), 2));
            indexFromStart++;
        }
        else {
            acc.unshift(Math.pow(Math.abs(initarr[indexFromEnd]), 2));
            indexFromEnd--;
        }
        return acc;
    }, new Array());
};
console.log(sortSquareArray([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
console.log(sortSquareArray([-7, -3, 2, 3, 11])); // [4, 9, 9, 49, 121]
//# sourceMappingURL=sortsquareArray.js.map