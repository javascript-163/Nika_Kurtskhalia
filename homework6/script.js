// 1. შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.
let string = "Hello my name is nika";

let longestWord = (string) => {
    let result = "";
    let strArray = string.split(" ");
    strArray.forEach(word => {
        word.length > result.length ? result = word : null;
    });
    return(result);
}

console.log(longestWord(string));

// 2. შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2,
// ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add,
// substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი,
// სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.
let calculator = {
    num1: 9,
    num2: 5,
    add: function() {
        return this.num1 + this.num2
    },
    substract: function() {
        return this.num1 - this.num2
    },
    multiply: function() {
        return this.num1 * this.num2
    },
    divide: function() {
        return this.num1 / this.num2
    }
}

console.log(calculator.add());
console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.divide());

// 3. შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად. 
// შექმენით ეს ფუნქცია მისი გამოძახების შემდეგ და აღწერეთ კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.


// იმ შემთხვევაში თუ ფუნქცია არ არის შენახული ცვლადში მისი დეკლარირება ხდება თავში,
// რაც იწვევს იმას რომ შეგიძლია ფუნქცია გამოიძახო მის განსაზღვრამდე
console.log(seyHello()); 

function seyHello() {
    return "hello";
}

// ცვლადში შენახვისას კი ერორს აგდებს ბრაუზერი და გეუბნება რომ ინიცალიზაციამდეა გამოძახებული ცვლადი
// რაც იმას ნიშნავს რომ ცვლადის let ში შენახვის შემთხვევაში არ ხდება ჰოისთინგი, ანუ არ ადეკლარირებს თავში
// Cannot access 'seyHello2' before initialization
console.log(seyHello2());

// იმ შემთხვევაში თუ გამოვიყენებთ var ცვლადს, ერორის განსხვავებული ვარიანტი გვხვდება, წერს რომ ფუნქცია არ არის,
// ანუ მისი ჰოისთინგი ხდება მაგრამ არ არის განსაზღვრული ჯერ რა არის ეს ცვლადი
// seyHello3 is not a function
console.log(seyHello3());

let seyHello2 = function() {
    return "hello2";
}
var seyHello3 = function() {
    return "hello3";
}
