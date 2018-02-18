var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        this.addedProducts.forEach(function (I) { sum = sum + I.weight; });
        // return (this.addedProducts.reduce((R,V,I,A) => {R.weight + V.weight}, 0)
        // ) 
        console.log("Общий вес: " + sum + " г.");
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var arr = [];
        this.addedProducts.forEach(function (I) { arr.push(I.name); });
        console.log("Наименование продуктов: ", arr);
        return arr;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.scale;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_getName, _getScale) {
        var _this = _super.call(this) || this;
        _this.type = 'apple';
        _this.name = _getName;
        _this.scale = _getScale;
        return _this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_getName, _getScale) {
        var _this = _super.call(this) || this;
        _this.type = 'tomato';
        _this.name = _getName;
        _this.scale = _getScale;
        return _this;
    }
    return Tomato;
}(Product));
var scale = new Scales();
var GreenApple = new Apple("Зеленое яблоко", 300);
var RedApple = new Apple("Красное яблоко", 350);
var YellowApple = new Apple("Желтое яблоко", 400);
var GreenTomato = new Tomato("Зеленый помидор", 200);
var RedTomato = new Tomato("Красный помидор", 250);
var YellowTomato = new Tomato("Желтый помидор", 280);
scale.add({ name: GreenApple.getName(), weight: GreenApple.getScale() });
scale.add({ name: RedApple.getName(), weight: RedApple.getScale() });
scale.add({ name: YellowApple.getName(), weight: YellowApple.getScale() });
scale.add({ name: GreenTomato.getName(), weight: GreenTomato.getScale() });
scale.add({ name: RedTomato.getName(), weight: RedTomato.getScale() });
scale.add({ name: YellowTomato.getName(), weight: YellowTomato.getScale() });
scale.getNameList();
scale.getSumScale();
//# sourceMappingURL=app.js.map