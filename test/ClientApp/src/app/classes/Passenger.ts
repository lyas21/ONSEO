import * as PIXI from 'pixi.js';

export class Passenger extends PIXI.Graphics {

    private p_x: number;
    private p_y: number;
    public floor: number;
    public isUp: boolean;
    public queuePos: number;

    constructor(x: number, y: number, direction: boolean, floor: number) {
        super();
        this.p_x = x;
        this.p_y = y;
        this.floor = floor;
        this.isUp = direction;
    }

    drawPassanger() {
        if (this.isUp) {
            this.lineStyle(4, 0x28a745, 1);
        } else {
            this.lineStyle(4, 0x004da0, 1);
        }
        this.drawRect(this.p_x, this.p_y, 20, 60);
    }
}
