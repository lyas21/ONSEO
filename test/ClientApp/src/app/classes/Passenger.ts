import * as TWEEN from 'tween.js/src/Tween.js';
import * as PIXI from 'pixi.js';
import { Tween } from '@tweenjs/tween.js';

export class Passenger extends PIXI.Graphics {

    private rend: PIXI.Renderer = new PIXI.Renderer();
    public p_x: number;
    public p_y: number;
    public floor: number;
    public isUp: boolean;
    public queuePos: number;
    public isInElevator: number;
    public animation: TWEEN.Tween;

    constructor(x: number, y: number, direction: boolean, floor: number, queuePos: number) {
        super();
        this.p_x = x;
        this.queuePos = queuePos;
        this.p_y = y;
        this.floor = floor;
        this.isUp = direction;
    }

    drawPassanger(x: number, y: number) {
        if (this.isUp) {
            this.lineStyle(4, 0x28a745, 1);
        } else {
            this.lineStyle(4, 0x004da0, 1);
        }
        this.drawRect(x, y, 20, 60);
    }

    renderPassenger() {
        return this.render(this.rend);
    }

    goToElevator() {
        let coords = { x: this.p_x, y: this.p_y};
        this.animation = new TWEEN.Tween(coords)
            .to({ x: 140 + this.queuePos * 30 }, 3000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onStart(() => console.log('s'))
            .onUpdate(() => {this.clear(); this.drawPassanger(coords.x, coords.y); });
        this.animation.start();
    }

    animate(pathNumber: number) {

    }
}
