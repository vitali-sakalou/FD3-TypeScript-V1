var Ship = /** @class */ (function () {
    function Ship() {
        this._speed = 0;
        this._sailState = false;
    }
    Object.defineProperty(Ship.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
            if (value)
                this._sailState = true;
            else
                this._sailState = false;
        },
        enumerable: true,
        configurable: true
    });
    Ship.prototype.show = function () {
        console.log("ship sailState=" + this._sailState
            + " speed=" + this._speed);
    };
    return Ship;
}());
var ship1 = new Ship();
console.log('скорость=' + ship1.speed);
ship1.show();
ship1.speed = 100;
ship1.show();
ship1.speed = 0;
ship1.show();
//# sourceMappingURL=app.js.map