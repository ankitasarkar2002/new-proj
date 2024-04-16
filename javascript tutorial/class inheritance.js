class Animal{
    constructor(name,color){
        this.name=name
        this.color=color

    }
    run(){
        console.log(this.name+"is running")
    }
    bark(){
        console.log(this.name+"is barking")
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(this.name+"is eating")
    }
    hide(){
        console.log (`${this.name} is hiding`)
    }
}



let ani=new Animal("golden retriver","golden")
let m=new Monkey("chipuuu","red")