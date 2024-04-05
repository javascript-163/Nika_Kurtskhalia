class Shape { 
    constructor(name) {
        this.name = name;
    }

    area() {
        console.log("Area calculation not implemented for generic shape.");
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    area() {
        console.log(`Area of ${this.name} ${Math.PI * this.radius * this.radius}`);
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    area() {
        console.log(`Area of ${this.name} ${this.width * this.height}`);
    }
}

class Triangle extends Shape {
    constructor(name, base, height) {
        super(name);
        this.base = base;
        this.height = height;
    }

    area() {
        console.log(`Area of ${this.name} ${(this.base * this.height)/2}`);
    }
}

let rectangle = new  Rectangle("rectangle", 10, 5);
let circle = new  Circle("circle", 10);
let triangle = new  Triangle("triangle", 10, 5);
let general = new  Shape("general");

rectangle.area();
circle.area();
triangle.area();
general.area();