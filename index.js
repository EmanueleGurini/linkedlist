"use strict";
exports.__esModule = true;
var Node_1 = require("./Node");
function main() {
    var node1 = new Node_1["default"](4);
    var node2 = new Node_1["default"](5);
    node1.next = node2;
    node1.getNext();
}
main();
