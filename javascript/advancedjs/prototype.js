// let myName = 'iqra'

// console.log(myName.trueLength);

let myHeros = ['thor', 'spiderman']
let heroPower = {
    thor : 'hammer',
    spiderman: 'web',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.iqra = function(){
    console.log("iqra is present in all objects");
    
}
// myHeros.iqra()
// heroPower.iqra()
Array.prototype.heyIqra = function(){
    // console.log("iqra says hey")
}

myHeros.heyIqra()
// heroPower.heyIqra() --- doesnt have it


// inheritance

const user = {
    name : 'iqra',
    email: "iqra@example.com"
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable : false,
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotheruser = "iqrakhan"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);

}

anotheruser.trueLength()
"iqra".trueLength()
'sumbul'.trueLength()