interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5;  // Error, p1.x is read-only

let p2 = { x: 1, y: 1 };
let p3: Point = p2;  // Ok, read-only alias for p2
p3.x = 5;  // Error, p3.x is read-only
p2.x = 5;  // Ok, but also changes p3.x because of aliasing

let f = new Foo();
f.a = 212;

class Foo {
    readonly a = 1;
    readonly b: string;
    constructor() {
        this.b = "hello";  // Assignment permitted in constructor
    }
}