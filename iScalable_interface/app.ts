
class Scales {

    addedProducts:IScalable[];

    constructor() {
        this.addedProducts=[]; 
    }

    add(_addedProducts:IScalable):void {
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

interface IScalable {
    getName():string;
    getScale():number;
}


class Apple implements IScalable {
    type:string = 'apple';
    name: string;
    scale: number;
    constructor(_getName, _getScale) {
        this.name = _getName;
        this.scale = _getScale;
    }
    getName():string{
         return this.name;
    }   
    getScale():number{
          return this.scale;
    }
}

class Tomato implements IScalable {
    name: string;
    scale: number;
    type:string = 'tomato';
    constructor(_getName, _getScale) {
        this.name = _getName;
        this.scale = _getScale;
    }
    getName():string{
        return this.name;
   }     
   getScale():number{
         return this.scale;
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
