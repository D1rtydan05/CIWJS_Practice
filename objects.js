let student = {
    name: "bob jones",
    height: "5,11",
    id: 12345,
    favorite_color: "orange"
};

for(let key in student) {
    console.log(student[key]);
}

let name_prompt = prompt("What is your name?", "")
student["name"] = name_prompt
let height_prompt = prompt("What is your Height?", "")
student["height"] = height_prompt
let id_prompt = prompt("What is your ID number?", "")
student["id"] = id_prompt
let favorite_color_prompt = prompt("What is our favorite color?", "")
student["favorite_color"] = favorite_color_prompt

function createStudent(name, id) {
    return{
        name: name,
        id: id
    };
}
let jimmy = createStudent("Jimmy X.", 123456);
console.log(jimmy.name);

let create_Student = function(name, height, id, favorite_color) {
    return {name, height, id, favorite_color}
};
let mrG = create_Student("mr G", "5 11", 123, "blue");
console.log(mrG);

//=================================================================================================
// let Catheryn = {
//     grade1: 70,
//     grade2: 27,
//     grade3: 27,
//     grade4: 13,
//     grade5: 60,
//     grade6: 3,
//     grade7: 29,
//     grade8: 23,
//     grade9: 67,
//     grade10: 16,
//     grade11: 18,
//     grade12: 70,
//     grade13: 76,
//     grade14: 13,
//     grade15: 26,
//     grade16: 30,
//     grade17: 41,
//     grade18: 16,
//     grade19: 33,
//     grade20: 26,
//     grade21: 59,
//     grade22: 1,
//     grade23: 57,
//     grade24: 3,
//     grade25: 61,
//     grade26: 78,
//     grade27: 10,
//     grade28: 22,
//     grade29: 62,
//     grade30: 72,
//     grade31: 59,
//     grade32: 82,
//     grade33: 59,
//     grade34: 84,
//     grade35: 20,
//     grade36: 34,
//     grade37: 52,
//     grade38: 81,
//     grade39: 76,
//     grade40: 41,
//     grade41: 18,
//     grade42: 90,
//     grade43: 41,
//     grade44: 31,
//     grade45: 16,
//     grade46: 15,
//     grade47: 68,
//     grade48: 44,
//     grade49: 47,
//     grade50: 25,
//     grade51: 20,
//     grade52: 20,
//     grade53: 46,
//     grade54: 44,
//     grade55: 14,
//     grade56: 79,
//     grade57: 81,
//     grade58: 2,
//     grade59: 62,
//     grade60: 88,
//     grade61: 29,
//     grade62: 34,
//     grade63: 27,
//     grade64: 45,
//     grade65: 26,
//     grade66: 59,
//     grade67: 75,
//     grade68: 73,
//     grade69: 31,
//     grade70: 82,
//     grade71: 85,
//     grade72: 39,
//     grade73: 13,
//     grade74: 14,
//     grade75: 9,
//     grade76: 52,
//     grade77: 49,
//     grade78: 27,
//     grade79: 4,
//     grade80: 30,
//     grade81: 38,
//     grade82: 21,
//     grade83: 10,
//     grade84: 73,
//     grade85: 44,
//     grade86: 23,
//     grade87: 24,
//     grade88: 13,
//     grade89: 69,
//     grade90: 35,
//     grade91: 63,
//     grade92: 8,
//     grade93: 57,
//     grade94: 59,
//     grade95: 79,
//     grade96: 76,
//     grade97: 74,
//     grade98: 81,
//     grade99: 96,
//     grade100: 13
// }

// let sum = 0;
// let count = 0;
// for (let grade in Catheryn){
//     if(Catheryn.hasOwnProperty(grade)){
//         sum += Catheryn[grade];
//         // count += 1;
//     }
// }

// console.log(sum/100);
// console.log(sum / count);


// function student(name, id, gradeLvl, currentGrd){
//     this.name = name;
//     this.id = id;
//     this.gradeLvl = gradeLvl;
//     this.currentGrd = currentGrd;
//     this.admin = false;

//     this.graduate = function(){
//         return this.gradeLvl++;
//     },
    
//     this.whiteList = function(){
//         return this.admin = true;
//     },

//     this.setGrade = function(value){
//         return this.currentGrd = value;
//     }
// };

// let mrG = new student('Jordan Gillispie', 1234, 'life' , 'above average');
// console.log(mrG);
//mrG.setGrade(100)

//===========================================================================================================

class Rectangle {
    constructor(width, length){
        this.width = width;
        this.length = length;
    }
    get area(){
        return this.width * this.length
    }
};

const rect1 = new Rectangle(10, 5);
const rect2 = new Rectangle(6, 12);
const rect3 = new Rectangle(15, 20);

const area = [rect1.area, rect2.area, rect3.area];
console.log(area[0], area[1], area[2]);

class Circle{
    set radius(radius){
        this._radius = radius;
        this.area = 3.14 * Math.pow(radius, 2);
        this.circumference = 2 * (3.14) * radius;
    }
}

const circ = new Circle();
