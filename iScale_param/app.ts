interface IStorageEngine{

     addItem(item:Product):void;
     getItem(index:number):Product; 
     getCount():number;

}

class Scales<StorageEngine extends IStorageEngine> {

    engine: StorageEngine;
    
    constructor(typeEngine:StorageEngine) {
        this.engine = typeEngine; 
    }

    addItem(_addedProducts:Product):void {
       this.engine.addItem(_addedProducts);
    };

    getSumScale():number {
        let sum:number = 0;
        let count = this.engine.getCount();
        for (let i = 0; i < count; i++) {
            sum = sum + this.engine.getItem(i).getScale();
        }
        console.log("Общий вес: "+sum+" г.");
        return sum;
    }
    
    getNameList():string[] {
        let arr:string[]= [];
        let count = this.engine.getCount();
        for (let i = 0; i < count; i++) {
            arr.push(this.engine.getItem(i).getName());
        }
        console.log("Наименование продуктов: ",arr);
        return arr;
    }
    
}

class ScalesStorageEngineArray implements IStorageEngine {
    
    addedProducts:Array<Product>;

    constructor() {
        this.addedProducts=[]; 
    }

    addItem(_addedProducts:Product):void {
        this.addedProducts.push(_addedProducts);
    };

    getItem(index:number):Product{
        let element:Product= this.addedProducts[index];
        return element;
    };

    getCount():number{
        return (this.addedProducts.length);
    };

}

let typeOfStorageEngineArray=new ScalesStorageEngineArray();

let scale = new Scales<ScalesStorageEngineArray>(typeOfStorageEngineArray);



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

let GreenApple = new Apple("Зеленое яблоко", 300);
let RedApple = new Apple("Красное яблоко", 350);
let YellowApple = new Apple("Желтое яблоко", 400);

let GreenTomato = new Tomato("Зеленый помидор", 200);
let RedTomato = new Tomato("Красный помидор", 250);
let YellowTomato = new Tomato("Желтый помидор", 280);

scale.addItem(GreenApple);
scale.addItem(RedApple);
scale.addItem(YellowApple);
scale.addItem(GreenTomato);
scale.addItem(RedTomato);
scale.addItem(YellowTomato);

scale.getSumScale();
scale.getNameList();
