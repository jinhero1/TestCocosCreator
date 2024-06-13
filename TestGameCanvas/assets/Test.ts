import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Test")
export class Test extends Component {
    const username = "admin";
    const password = "123456";

    start() {
        const bug1 = this.writeReliabilityBug();
        console.log("Trace bug1: ", bug1);

        const bug2 = this.writeSecurityHotspots();
        console.log("Trace bug2: ", bug2);
    }

    private collection = [];
    private writeReliabilityBug() {
        if (this.collection.length < 0) {
            return null;
        }
    }

    private writeSecurityHotspots(): number {
        return Math.random();
    }
}
