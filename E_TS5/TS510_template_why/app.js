// хранилище однородных (похожих) объектов, 
// реализующих интерфейс IStorageItem
var StorageArea = /** @class */ (function () {
    function StorageArea() {
        this.items = [];
    }
    // сохранить объект на складе
    StorageArea.prototype.storeItem = function (item) {
        var index = this.items.length;
        this.items.push(item);
        console.log("сохранён объект"
            + " размером " + item.getWidth() + "x"
            + item.getHeight() + "x" + item.getDepth() + " мм,"
            + " весом " + item.getWeight() + " г");
        return index;
    };
    // получить сохранённый объект (объект продолжает храниться)
    StorageArea.prototype.getItem = function (index) {
        return this.items[index];
    };
    return StorageArea;
}());
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.getWidth = function () { return 200; };
    Computer.prototype.getHeight = function () { return 500; };
    Computer.prototype.getDepth = function () { return 500; };
    Computer.prototype.getWeight = function () { return 500; };
    return Computer;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getWidth = function () { return 2000; };
    Car.prototype.getHeight = function () { return 2000; };
    Car.prototype.getDepth = function () { return 4000; };
    Car.prototype.getWeight = function () { return 1000000; };
    return Car;
}());
// склад компьютеров
var computersStorageArea = new StorageArea;
var computer1 = new Computer;
var computer2 = new Computer;
var computer3 = new Computer;
// сохраним на складе 3 компьютера
var computerIndex1 = computersStorageArea.storeItem(computer1);
var computerIndex2 = computersStorageArea.storeItem(computer2);
var computerIndex3 = computersStorageArea.storeItem(computer3);
// склад автомобилей
var carsStorageArea = new StorageArea;
var car1 = new Car;
var car2 = new Car;
var car3 = new Car;
// сохраним на складе 3 автомобиля
var carIndex1 = carsStorageArea.storeItem(car1);
var carIndex2 = carsStorageArea.storeItem(car2);
var carIndex3 = carsStorageArea.storeItem(car3);
// получим один из хранимых объектов
// мы без проблем можем получить со склада объект, 
// реализующий интерфейс IStorageItem
var item01 = computersStorageArea.getItem(computerIndex2);
var item02 = carsStorageArea.getItem(computerIndex2);
console.log(item02);
// мы НЕ можем без преобразования типа получить ни Car, ни Computer
// let item11:Car=carsStorageArea.getItem(carIndex2); - ошибка
// let item12:Computer=computersStorageArea.getItem(computerIndex2); - ошибка
// мы должны применять явное преобразование типа, 
// что по сути отключает статическую типизацию
var item21 = carsStorageArea.getItem(carIndex2);
var item22 = computersStorageArea.getItem(computerIndex2);
//# sourceMappingURL=app.js.map