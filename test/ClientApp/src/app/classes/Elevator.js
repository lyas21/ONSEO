"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Elevator = /** @class */ (function () {
    function Elevator(x, y, passenger, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.passengers = passenger;
    }
    Elevator.prototype.render = function (gr) {
        gr.lineStyle(4, 0x71b5ff, 1);
        gr.moveTo(this.x, this.y);
        gr.lineTo(this.x + 80, this.y);
        gr.moveTo(this.x + 80, this.y);
        gr.lineTo(this.x + 80, this.y + 20);
        gr.moveTo(this.x, this.y);
        gr.lineTo(this.x, this.y + 80);
        gr.moveTo(this.x, this.y + 80);
        gr.lineTo(this.x + 80, this.y + 80);
        gr.closePath();
    };
    return Elevator;
}());
exports.Elevator = Elevator;
//# sourceMappingURL=Elevator.js.map