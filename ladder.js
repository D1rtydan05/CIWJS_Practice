let ladder = {
    step: 0,
    maxHeight: 5,
    up(){
        if(this.step !== this.maxHeight){
            this.step++;
        }else{
            alert("Max Hieght Reached: 5 steps");
        }
    },

    down(){
        this.step--;
    },

    showStep: function(){
        console.log(this.step);
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();