function getProb(number, divisor) {
    return Math.random() * divisor < number;
}

//Returns sequential integer IDs.
var getId = (function () {
    var i = 0;
    return function () {
        return i++;
    };
})();

function get2dCanvasContext(document, id) {
    var canvas = document.getElementById(id);
    if (canvas.getContext) {
        return canvas.getContext("2d");
    }
    else { throw ("Canvas not supported!"); }
}
