
class Scales {

    addedProducts:Product[];

    constructor() {
        this.addedProducts=[]; 
    }

    add(_addedProducts:Product):void {
        this.addedProducts.push(_addedProducts);
        console.log( this.addedProducts);
    }

    getSumScale():number {
        let sum:number = 0;
        this.addedProducts.forEach( (I) => {sum = sum+I.getScale()})
        console.log("Общий вес: "+sum+" г.");
        return sum
    }
    
    getNameList():string[] {
        let arr:string[]= [];
        this.addedProducts.forEach( (I) => {arr.push(I.getName())})
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
    constructor(_getName, _getScale) {
        this.name = _getName;
        this.scale = _getScale;
    }
}


class Apple extends Product {

    type:string = 'apple';

    constructor(_getName, _getScale) {
        super(_getName, _getScale);
    }

}

class Tomato extends Product {

    type:string = 'tomato';

    constructor(_getName, _getScale) {
        super(_getName, _getScale);
    }
    
}

let scale = new Scales();
let GreenApple = new Apple("Зеленое яблоко", 300);
let RedApple = new Apple("Красное яблоко", 350);
let YellowApple = new Apple("Желтое яблоко", 400);

let GreenTomato = new Tomato("Зеленый помидор", 200);
let RedTomato = new Tomato("Красный помидор", 250);
let YellowTomato = new Tomato("Желтый помидор", 280);

scale.add(GreenApple);
scale.add(RedApple);
scale.add(YellowApple);
scale.add(GreenTomato);
scale.add(RedTomato);
scale.add(YellowTomato);

scale.getNameList();
scale.getSumScale();
