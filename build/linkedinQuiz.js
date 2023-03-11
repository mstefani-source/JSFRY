function extern() {
    let count = 0;
    function intern() {
        console.log('count = ', ++count);
    }
    return intern;
}
const internFn = extern();
internFn();
internFn();
//# sourceMappingURL=linkedinQuiz.js.map