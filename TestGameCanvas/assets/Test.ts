import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Test")
export class Test extends Component {
    start() {
/*
        console.log("Trace Test start");
        var body = document.body;

        const result = 0.1 + 0.2;

        console.log("Trace result: ", result);
        console.log("Trace result toFixed: ", result.toFixed(2));
        console.log("Trace result toPrecision: ", result.toPrecision(2));

        const result2 = this.addAsIntegers(0.1, 0.2);
        console.log("Trace result2: ", result2);
*/
        const bug = this.writeBug();
        console.log("Trace bug: ", bug);
    }
/*
    private addAsIntegers(a: number, b: number): number {
        return (a * 100 + b * 100) / 100;
    }
*/
    private collection = [];
    private writeBug() {
        if (this.collection.length < 0) {
            return null;
        }
    }
}
