
class Car {

    num:number;

    constructor(_num) {
        this.num=_num;
    }

    show():void {
        console.log("car num="+this.num);
    }
    
}

class House {
    
    num:number;
    flats:number;

    constructor(_num,_flats) {
        this.num=_num;
        this.flats=_flats;
    }

    show():void {
        console.log("house num="+this.num+" flats="+this.flats);
    }
    
}
    
// у House есть все свойства и методы, которые нужны для Car
// а также "лишнее" свойство flats
// возможно присваивание без преобразования типа
let car1:Car=new House("21",9*4);
car1.show(); // вызовется show класса House


let carHash={
    num:2870,
    speed:100,
    show: function():void {
        console.log("carhash num="+this.num);
    }
};

// у хэша carHash есть все свойства и методы, которые нужны для Car
// а также "лишнее" свойство speed
// возможно присваивание без преобразования типа
let car2:Car=carHash;
car2.show(); // вызовется show хэша
