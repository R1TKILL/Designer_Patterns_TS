class Singleton{

    // * Attributes:
    private static _instance: Singleton | null = null;

    // * Constructor:
    private Singleton() {
        // * (new) not allowed outside the class
    }

    // * Methods / Getters / Setters:
    static get singleInstance(): Singleton {

        if(this._instance === null){
            this._instance = new Singleton();
        }

        return this._instance;

    }
}

const instance1 = Singleton.singleInstance;
const instance2 = Singleton.singleInstance;

console.log(instance1 === instance2); // true

