class Rectangle {
    width;
    height;

    setWidth(value) {
        this.width = value;
    }

    setHeight(value) {
        this.height = value;
    }

    getArea() {
        return this.height * this.width;
    }
}

class Square extends Rectangle {
    setWidth(value) {
        super.setWidth(value);
        super.setHeight(value);
    }

    setHeight(value) {
        super.setWidth(value);
        super.setHeight(value);
    }
}

const rect = new Rectangle();
// const rect = new Square();
rect.setHeight(10);
rect.setWidth(2);

console.log(rect.getArea() === 20);