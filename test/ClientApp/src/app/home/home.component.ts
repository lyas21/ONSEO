import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js';
import * as TWEEN from 'tween.js/src/Tween.js';
import { Elevator } from '../classes/Elevator';
import { Passenger } from '../classes/Passenger';
import { delay } from 'q';
import { Tween } from '@tweenjs/tween.js';

@Component({
    selector: 'app-home',
    styles: ['./home.component.css'],
    templateUrl: './home.component.html',
})

// class floor {
//     id: number;
//     name: floor;
//     getInfo(): string {
//         return "id:" + this.id;
//     }
//     let first: floor = new floor();
//     floor.id = 
// }

export class HomeComponent implements OnInit {

    public floorsCount = 6;
    public passangerCount = 4;
    public readonly graphics = new PIXI.Graphics();
    public readonly app = new PIXI.Application({ antialias: false });
    public elevator: Elevator;
    public passengers: Passenger[] = new Array<Passenger>();
    public passangersInElevator: Passenger[] = new Array<Passenger>();
    private container = new PIXI.Container();

    async ngOnInit() {

        document.body.appendChild(this.app.view);
        this.addPassenger(1, true, 5, 0);
        this.addPassenger(4, false, 1, 0);
        this.render();

        this.animate(undefined);

        for (let i = 0; i < this.passengers.length; i++) {
            this.passengers[i].goToElevator();
        }

        console.log(new Date());
        await delay(1000);
        console.log(new Date());



        await this.elevator.goTo(3);
        await this.elevator.goTo(2);
        // await delay(800);
        // this.elevator.goTo(4);
        // await delay(800);
        // this.elevator.goTo(1);
        // await delay(800);
        // this.elevator.goTo(0);
        // await delay(800);


        // let coords = {x: 28, y: 0};
        // new TWEEN.Tween(coords).to({ y: 80}, 3000)
        //     .onStart(() => console.log('s'))
        //     .easing(TWEEN.Easing.Quadratic.Out)
        //     .onUpdate(() => {this.elevator.clear(); this.elevator.drawElevator(coords.x, coords.y)}).start();
        // const tween = new TWEEN.Tween(position)
        //     .to({x: 1000, y: 1000}, 3000)
        //     .delay(100).
        //     onUpdate(() => {console.log(position.x); this.elevator.drawElevator(); });
        // TWEEN.add(tween);
        // console.log(TWEEN.getAll());
        // tween.start();
        // // console.log(TWEEN);
        // tween.update();
    }



    // async ngOnInit() {

    //     document.body.appendChild(this.app.view);
    //     this.addPassenger(1, true, 5);
    //     this.addPassenger(4, false, 1);
    //     this.render();

    //     this.animate(undefined);

    //     this.passenger.goTo(4);
    // }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    addPassenger(floorNumber: number, isUp: boolean, floorDirection: number, queuePos: number) {
        const passanger = new Passenger(672, ((floorNumber - 1) * 80 + 16), isUp, floorDirection, queuePos);
        this.passengers.push(passanger);
    }

    render() {
        this.drawFloors();
        this.drawElevator();

        for (let i = 0; i < this.passengers.length; i++) {
            this.passengers[i].drawPassanger(this.passengers[i].p_x, this.passengers[i].p_y);
            this.container.addChild(<PIXI.Graphics>this.passengers[i]);
        }
        this.container.addChild(<PIXI.Graphics>this.elevator);
        this.container.addChild(this.graphics);

        this.app.stage.addChild(this.container);
    }

    drawFloors() {
        for (let i = 1; i <= this.floorsCount; i++) {
            this.graphics.lineStyle(4, 0xffd900, 1);
            this.graphics.moveTo(140, i * 80);
            this.graphics.lineTo(700, i * 80);
            this.graphics.closePath();
        }
    }

    drawElevator() {
        this.elevator = new Elevator(this.passangerCount, undefined);
        this.elevator.drawElevator(28, 0);
    }

    getRandomArbitrary(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
    animate(time) {
        requestAnimationFrame(() => this.animate(time));
        TWEEN.update(time);
    }
}


