import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

const username = "admin";
const password = "123456";

@ccclass("Test")
export class Test extends Component {

    start() {
        const bug1 = this.writeReliabilityBug();
        console.log("Trace bug1: ", bug1);

        const bug2 = this.writeSecurityHotspots();
        console.log("Trace bug2: ", bug2);

        console.log("Trace username: ", username);
        console.log("Trace password: ", password);
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
