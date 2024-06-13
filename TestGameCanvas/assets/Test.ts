import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Test")
export class Test extends Component {

    start() {
        const bug1 = this.writeReliabilityBug();
        console.log("Trace bug1: ", bug1);

        const bug2 = this.writeSecurityHotspots();
        console.log("Trace bug2: ", bug2);

        const bug3 = this.writeSecurityBug();
        console.log("Trace bug3: ", bug3);
    }

    private collection = [];
    private writeReliabilityBug() {
        if (this.collection.length < 0) {
            return null;
        }
    }

    private writeSecurityBug() {
        const query = 'SELECT * FROM users WHERE id = 1';
        fetch('https://localhost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(query)
        })

    }

    private writeSecurityHotspots(): number {
        return Math.random();
    }
}
