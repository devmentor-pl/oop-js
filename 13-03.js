class Shape {
    getArea() {
        throw new Error('Implement getArea() method')
    }
}

class Rectangle extends Shape {
    width;
    height;

    setWidth(value) {
        this.width = value;
    }

    setHeight(value) {
        this.height = value;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    side;

    setSide(side) {
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }
}

const rect = new Rectangle();
rect.setHeight(10);
rect.setWidth(2);

console.log(rect.getArea() === 20);

const square = new Square();
square.setSide(5)

console.log(square.getArea() === 25);