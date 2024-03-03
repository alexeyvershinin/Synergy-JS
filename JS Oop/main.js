import {containsJavaScript} from './wordCheck.js';

const testString = 'Привет Javascript';
console.log(containsJavaScript(testString));

class Oven {
    constructor(maxTemperature) {
        this._maxTemperature = maxTemperature > 15 ? 15 : maxTemperature;
    }

    get maxTemperature() {
        return this._maxTemperature;
    }

    set maxTemperature(value) {
        if (value > 15) {
            console.log("Превышена максимальная температура. Установлено максимальное значение: 15");
            this._maxTemperature = 15;
        } else {
            this._maxTemperature = value;
        }
    }
}

const myOven = new Oven(200);
console.log("Максимальная температура печи: " + myOven.maxTemperature);
myOven.maxTemperature = 250;

class ImprovedStove extends Oven {
    constructor(maxTemperature) {
        super(maxTemperature);
        this.currentTemperature = 0;
    }

    turnOn() {
        console.log("Плита включена. Начало нагрева.");
        this.heatingInterval = setInterval(() => {
            this.currentTemperature++;
            console.log("Текущая температура: " + this.currentTemperature);
            if (this.currentTemperature >= this.maxTemperature) {
                clearInterval(this.heatingInterval);
                console.log("Плита достигла максимальной температуры.");
                this.turnOff();
            }
        }, 500);
    }

    turnOff() {
        console.log("Плита выключена. Начало остывания.");
        this.coolingInterval = setInterval(() => {
            this.currentTemperature--;
            console.log("Текущая температура: " + this.currentTemperature);
            if (this.currentTemperature <= 0) {
                clearInterval(this.coolingInterval);
                console.log("Плита остыла.");
            }
        }, 500);
    }
}

const myImprovedStove = new ImprovedStove(250);
console.log("Максимальная температура улучшенной плиты: " + myImprovedStove.maxTemperature);
myImprovedStove.maxTemperature = 200;
myImprovedStove.turnOn();