import * as TWEEN from 'tween.js/src/Tween.js';
import * as PIXI from 'pixi.js';

export class Elevator extends PIXI.Graphics {

    private rend: PIXI.Renderer = new PIXI.Renderer();
    private e_x: number;
    private e_y: number;
    public passengers: number;
    public isUp?: boolean;
    public widthPassanger: number;
    public animation: TWEEN.Tween;
    public currentFloor: number;
    public queue: number[] = new Array<number>();

    constructor(passenger: number, direction: boolean) {
        super();
        this.e_x = 140 - 28 * passenger;
        this.e_y = 0;
        this.isUp = direction;
        this.passengers = passenger;
        this.widthPassanger = 28 * passenger;
        this.currentFloor = 0;
    }

    drawElevator(x: number, y: number) {
        this.e_y = y;
        this.e_x = x;
        this.lineStyle(4, 0x71b5ff, 1);
        this.moveTo(x, y);
        this.lineTo(x + this.widthPassanger, y);
        this.moveTo(x + this.widthPassanger, y);
        this.lineTo(x + this.widthPassanger, y + 15);
        this.moveTo(x, y);
        this.lineTo(x, y + 80);
        this.moveTo(x, y + 80);
        this.lineTo(x + this.widthPassanger, y + 80);
        this.closePath();
    }

    renderElevator() {
        return this.render(this.rend);
    }

    async goTo(floorNumber: number) {
        let coords = {x: this.e_x, y: this.e_y};
        let floorDiff = this.currentFloor - floorNumber;
        const velocity = 1000 * Math.abs(floorDiff);
        this.isUp = floorDiff < 0;
        this.animation = new TWEEN.Tween(coords)
            .to({ y: 80 * floorNumber - this.currentFloor}, velocity)
            .onStart(() => console.log('s'))
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(() => {this.clear(); this.drawElevator(coords.x, coords.y); });
        this.animation.start();
        this.currentFloor = floorNumber;
        await this.delay(velocity);
    }

    animate(floorNumber: number) {
    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}
