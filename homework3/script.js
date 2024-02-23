// 1
let number1 = 5;
let number1sqr = number1*number1;

console.log(number1sqr);

//2
let c = Number(prompt("შეიყვანე გრადუსი ცელსიუსში"));
let fahrenheit = c*9/5+32;


console.log(fahrenheit);

//3
let number3 = Number(prompt("შეიყვანე რიცხვი"));
let min = Number(prompt("შეიყვანე საწყისი რიცხვი"));
let max = Number(prompt("შეიყვანე საბოლოო რიცხვი"));

if(number3 >= min && number3 <= max) {
    alert("რიცხვი მოცემულ დიაპაზონშია");
} else {
    alert("რიცხვი მოცემულ დიაპაზონს ცდება");
}

//4
let year = Number(prompt("შეიყვანე წელი"));

if((year%4 === 0 && year%100 !== 0 )|| year%400 === 0) {
    alert("წელი ნაკიანია");
} else {
    alert("წელი არ არის ნაკიანი");
}

//5
let first = prompt("შეიყვანე პირველი რიცხვი");
let second = prompt("შეიყვანე მეორე რიცხვი");
let operation = prompt("შეიყვანე მოქმედება");

//5.1
let math = first+operation+second;

console.log(eval(math));

//5.2
let firstToNumber = Number(first);
let secondToNumber = Number(second);

switch(operation) {
    case "+":
        console.log(firstToNumber+secondToNumber);
        break;
    case "-":
        console.log(firstToNumber-secondToNumber);
        break;
    case "*":
        console.log(firstToNumber*secondToNumber);
        break;
    case "/":
        console.log(firstToNumber/secondToNumber);
        break;
    case "**":
        console.log(firstToNumber**secondToNumber);
        break;
    case "%":
        console.log(firstToNumber%secondToNumber);
        break;
    default:
        console.log("error");
}
