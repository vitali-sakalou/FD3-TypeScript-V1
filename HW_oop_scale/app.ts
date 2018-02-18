
class Scales {

    addedProducts:{name: string, weight: number}[];

    constructor() {
        this.addedProducts=[]; 
    }

    add(_addedProducts:{name: string, weight: number}):void {
        this.addedProducts.push(_addedProducts);
        console.log( this.addedProducts);
    }

    getSumScale():number {
        let sum:number = 0;
        this.addedProducts.forEach( (I) => {sum = sum+I.weight})
        console.log("Общий вес: "+sum+" г.");
        return sum
    }
    
    getNameList():string[] {
        let arr:string[]= [];
        this.addedProducts.forEach( (I) => {arr.push(I.name)})
        console.log("Наименование продуктов: ",arr);
        return arr;
    }
}



class Product {

    name: string;

    scale: number;

    getName():string{
        return this.name;
    }

    getScale():number{
        return this.scale;
    }
}


class Apple extends Product {

    type:string = 'apple';

    constructor(_getName, _getScale) {
        super();
        this.name = _getName;
        this.scale = _getScale;
    }

}

class Tomato extends Product {

    type:string = 'tomato';

    constructor(_getName, _getScale) {
        super();
        this.name = _getName;
        this.scale = _getScale;
    }
    
}

let scale = new Scales();
let GreenApple = new Apple("Зеленое яблоко", 300);
let RedApple = new Apple("Красное яблоко", 350);
let YellowApple = new Apple("Желтое яблоко", 400);

let GreenTomato = new Tomato("Зеленый помидор", 200);
let RedTomato = new Tomato("Красный помидор", 250);
let YellowTomato = new Tomato("Желтый помидор", 280);

scale.add({name: GreenApple.getName(), weight: GreenApple.getScale()});
scale.add({name: RedApple.getName(), weight: RedApple.getScale()});
scale.add({name: YellowApple.getName(), weight: YellowApple.getScale()});
scale.add({name: GreenTomato.getName(), weight: GreenTomato.getScale()});
scale.add({name: RedTomato.getName(), weight: RedTomato.getScale()});
scale.add({name: YellowTomato.getName(), weight: YellowTomato.getScale()});

scale.getNameList();
scale.getSumScale();
