// interface IStorageEngine{
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
//      addItem(item):number;
//      getItem(index):number; 
//      getCount():number;
// }
var Scales = /** @class */ (function () {
    function Scales(typeEngine) {
        this.items = typeEngine.addedProducts;
        console.log("!", typeEngine.addedProducts);
    }
    Scales.prototype.addItem = function (_addedProducts) {
        this.items.push(_addedProducts);
        console.log(this.items);
    };
    ;
    Scales.prototype.getItem = function (index) {
        var element = this.items[index];
        console.log(element);
        return element;
    };
    ;
    Scales.prototype.getCount = function () {
        console.log(this.items.length);
        return (this.items.length);
    };
    ;
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.addedProducts = [];
    }
    return ScalesStorageEngineArray;
}());
// class ScalesStorageEngineLocalStorage  implements IStorageEngine {
//     addItem(item):number{r};
//     getItem(index):number{}; 
//     getCount():number{};
// }
var typeOfStorageEngineArray = new ScalesStorageEngineArray();
var scale = new Scales(typeOfStorageEngineArray);
// let ScalesStorageEngineLocalStorageScale=new Scales<ScalesStorageEngineLocalStorage>();
var Product = /** @class */ (function () {
    function Product(_getName, _getScale) {
        this.name = _getName;
        this.scale = _getScale;
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
        var _this = _super.call(this, _getName, _getScale) || this;
        _this.type = 'apple';
        return _this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_getName, _getScale) {
        var _this = _super.call(this, _getName, _getScale) || this;
        _this.type = 'tomato';
        return _this;
    }
    return Tomato;
}(Product));
var GreenApple = new Apple("Зеленое яблоко", 300);
var RedApple = new Apple("Красное яблоко", 350);
var YellowApple = new Apple("Желтое яблоко", 400);
var GreenTomato = new Tomato("Зеленый помидор", 200);
var RedTomato = new Tomato("Красный помидор", 250);
var YellowTomato = new Tomato("Желтый помидор", 280);
// typeOfStorageEngineArray.addItem(GreenApple);
// typeOfStorageEngineArray.getItem(0);
scale.addItem(GreenApple);
scale.addItem(RedApple);
scale.addItem(YellowApple);
scale.addItem(GreenTomato);
scale.addItem(RedTomato);
scale.addItem(YellowTomato);
scale.getItem(3);
scale.getCount();
//# sourceMappingURL=app.js.map