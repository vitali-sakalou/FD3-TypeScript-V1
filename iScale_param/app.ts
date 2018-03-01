// interface IStorageEngine{

//      addItem(item):number;
//      getItem(index):number; 
//      getCount():number;

// }

class Scales<StorageEngine> {

    items: StorageEngine[];
    
    constructor(typeEngine) {
        this.items = typeEngine.addedProducts; 
        console.log("!",typeEngine.addedProducts);
    }

    addItem(_addedProducts:any):void {
        this.items.push(_addedProducts);
        console.log( this.items);
    };

    getItem(index:number):StorageEngine{
        let element:StorageEngine= this.items[index];
        console.log(element);
        return element;
    };

    getCount():number{
        console.log(this.items.length);
        return (this.items.length);
    };
    
}

class ScalesStorageEngineArray {
    
    addedProducts:Array<any>;

    constructor() {
        this.addedProducts=[]; 
    }

}

// class ScalesStorageEngineLocalStorage  implements IStorageEngine {

//     addItem(item):number{r};
//     getItem(index):number{}; 
//     getCount():number{};

// }

let typeOfStorageEngineArray=new ScalesStorageEngineArray();

let scale = new Scales<ScalesStorageEngineArray>(typeOfStorageEngineArray);

// let ScalesStorageEngineLocalStorageScale=new Scales<ScalesStorageEngineLocalStorage>();



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
