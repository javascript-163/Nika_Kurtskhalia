// 1
let array = [1,2,3];

if(Array.isArray(array)) {
    console.log("array");
} else {
    console.log("Not array");
}

//2
let firstElement = array[0];

console.log(firstElement);

//3
let lastElement = array[array.length-1];

console.log(lastElement);

//4
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];

console.log(`1${o[1]} choise is ${color[0]}`);
console.log(`2${o[2]} choise is ${color[1]}`);
console.log(`3${o[3]} choise is ${color[2]}`);
console.log(`4${o[0]} choise is ${color[3]}`);
console.log(`5${o[0]} choise is ${color[4]}`);
console.log(`6${o[0]} choise is ${color[5]}`);
console.log(`7${o[0]} choise is ${color[6]}`);

//5

let person = {
    saxeli: "mate",
    gvari: "gotua"
}

person.asaki = 18;
delete person.gvari;
person.saxeli = "nika";

console.log(person);