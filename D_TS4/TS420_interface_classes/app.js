// моторная лодка - и устройство с мотором, и водный транспорт
var MotorShip = /** @class */ (function () {
    function MotorShip() {
        this.fuelLevel = 0;
        this.onWater = false;
    }
    MotorShip.prototype.addFuel = function (_add) {
        this.fuelLevel += _add;
    };
    MotorShip.prototype.waterLaunch = function () {
        this.onWater = true;
    };
    MotorShip.prototype.show = function () {
        console.log('ship fuelLevel=' + this.fuelLevel
            + ' onWater=' + this.onWater);
    };
    return MotorShip;
}());
// бензоколонка
var GasStation = /** @class */ (function () {
    function GasStation() {
    }
    GasStation.prototype.addEngineFuel = function (motor) {
        // бензоколонке всё равно - катер это или автомобиль
        // она работает с интерфейсом IEngine
        motor.addFuel(100);
    };
    return GasStation;
}());
// портовый рабочий
var PortWorker = /** @class */ (function () {
    function PortWorker() {
    }
    PortWorker.prototype.shipWaterLaunch = function (ship) {
        // портовому рабочему всё равно, 
        // подводная это лодка, катер или плот
        // он работает с интерфейсом IWaterTransp
        ship.waterLaunch();
    };
    return PortWorker;
}());
var motorShip1 = new MotorShip;
var gasStation1 = new GasStation;
var portWorker1 = new PortWorker;
gasStation1.addEngineFuel(motorShip1);
portWorker1.shipWaterLaunch(motorShip1);
motorShip1.show();
//# sourceMappingURL=app.js.map