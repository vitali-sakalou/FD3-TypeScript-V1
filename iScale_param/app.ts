interface IStorageEngine{

     addItem(item):number;
     getItem(index):number; 
     getCount():number;

}

class Scales<StorageEngine extends IStorageEngine> {

    addedProducts:Product[];

    constructor() {
        this.addedProducts=[]; 
    }
  
}

class ScalesStorageEngineArray implements IStorageEngine {

     addItem(_addedProducts:Product):number {
        this.addedProducts.push(_addedProducts);
        console.log( this.addedProducts);
        return (this.addedProducts.length)
    };
     getItem(index):number{}; 
     getCount():number{};

}

class ScalesStorageEngineLocalStorage  implements IStorageEngine {

    addItem(item):number{r};
    getItem(index):number{}; 
    getCount():number{};

}

let ScalesStorageEngineArrayScale=new Scales<ScalesStorageEngineArray>();

let ScalesStorageEngineLocalStorageScale=new Scales<ScalesStorageEngineLocalStorage>();



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
