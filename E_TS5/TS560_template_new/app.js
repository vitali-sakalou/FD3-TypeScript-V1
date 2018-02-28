// параметризованная фабрика
// умеет создавать и возвращать объекты любых типов
function uniFactory(classRef) {
    return new classRef();
}
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.getWidth = function () { return 200; };
    Computer.prototype.getHeight = function () { return 500; };
    Computer.prototype.getDepth = function () { return 500; };
    Computer.prototype.getWeight = function () { return 500; };
    Computer.prototype.show = function () {
        console.log("Компьютер"
            + " размером " + this.getWidth() + "x"
            + this.getHeight() + "x" + this.getDepth() + " мм,"
            + " весом " + this.getWeight() + " г");
    };
    return Computer;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getWidth = function () { return 2000; };
    Car.prototype.getHeight = function () { return 2000; };
    Car.prototype.getDepth = function () { return 4000; };
    Car.prototype.getWeight = function () { return 1000000; };
    Car.prototype.show = function () {
        console.log("Машинка"
            + " размером " + this.getWidth() + "x"
            + this.getHeight() + "x" + this.getDepth() + " мм,"
            + " весом " + this.getWeight() + " г");
    };
    return Car;
}());
// вызов функции-фабрики можно параметризовать
var newComputer = uniFactory(Computer);
newComputer.show();
// или не параметризовать
var newCar = uniFactory(Car);
newCar.show();
//# sourceMappingURL=app.js.map