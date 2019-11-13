"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Passenger = /** @class */ (function () {
    function Passenger(x, y, direction, floor) {
        this.x = x;
        this.y = y;
        this.floor = floor;
        this.direction = direction;
    }
    Passenger.prototype.render = function (gr) {
        if (this.direction) {
            gr.lineStyle(4, 0x28a745, 1);
        }
        else {
            gr.lineStyle(4, 0x004da0, 1);
        }
        gr.drawRect(this.x, this.y, this.x + 20, this.y + 60);
    };
    return Passenger;
}());
exports.Passenger = Passenger;
//# sourceMappingURL=Passenger.js.map