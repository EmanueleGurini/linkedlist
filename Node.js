"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(value, next) {
        var _this = this;
        if (next === void 0) { next = null; }
        this.getValue = function () {
            console.log('Node Value: ' + _this.value);
        };
        this.getNext = function () {
            console.log('Next Node: ' + _this.next.value);
        };
        this.value = value;
        this.next = next;
    }
    return Node;
}());
exports["default"] = Node;
