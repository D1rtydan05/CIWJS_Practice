class animal{
    constructor(name){ //constructor always comes first in a cass
        this.speed = 0;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        alert(`${this.name} runs with speed$ ${this.speed}`)
    }
    stop(){
        this.speed = 0;
        alert(`${this.name} stands still`)
    }
}

let animal = new animal('giraffe');

class giraffe extends animal{ //extending doesn't need constructors
    hide(){
        alert(`${this.name} hides`);
    }
    stop(){
        // .. now this will be used for giraffe.stop()
        //instead of the stop class from the animal
        super.stop();
        this.hide();
    }
}

let giraffe = new giraffe('chad');

giraffe.run(5);
giraffe.hide();
