export class myClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getMyName() {
        console.log("this is my mfirst method in class == ", this.name, this.age);
        return "nothin";
    }
}

// exports.myClass = myClass;