var Scales = /** @class */ (function () {
    function Scales() {
        this.addedProducts = [];
    }
    Scales.prototype.add = function (_addedProducts) {
        this.addedProducts.push(_addedProducts);
        console.log(this.addedProducts);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        this.addedProducts.forEach(function (I) { sum = sum + I.getScale(); });
        console.log("Общий вес: " + sum + " г.");
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var arr = [];
        this.addedProducts.forEach(function (I) { arr.push(I.getName()); });
        console.log("Наименование продуктов: ", arr);
        return arr;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_getName, _getScale) {
        this.type = 'apple';
        this.name = _getName;
        this.scale = _getScale;
    }
    Apple.prototype.getName = function () {
        return this.name;
    };
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_getName, _getScale) {
        this.type = 'tomato';
        this.name = _getName;
        this.scale = _getScale;
    }
    Tomato.prototype.getName = function () {
        return this.name;
    };
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    return Tomato;
}());
var scale = new Scales();
var GreenApple = new Apple("Зеленое яблоко", 300);
var RedApple = new Apple("Красное яблоко", 350);
var YellowApple = new Apple("Желтое яблоко", 400);
var GreenTomato = new Tomato("Зеленый помидор", 200);
var RedTomato = new Tomato("Красный помидор", 250);
var YellowTomato = new Tomato("Желтый помидор", 280);
scale.add(GreenApple);
scale.add(RedApple);
scale.add(YellowApple);
scale.add(GreenTomato);
scale.add(RedTomato);
scale.add(YellowTomato);
scale.getNameList();
scale.getSumScale();
//# sourceMappingURL=app.js.map