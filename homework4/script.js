//1
// შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.
let array = [1,2,3,4,5,6,7,8,9,10];

let thirdElement = (array) => {
    for(let i=0; i<array.length; i++) {
        if( i%3 === 2) {
            console.log(array[i]);
        }
    }
}

let thirdElement2 = (array) => {
    let count1=0;
    while(count1<array.length) {
        if( count1%3 === 2) {
            console.log(array[count1]);
        }
        count1++;
    }
}

thirdElement(array);
thirdElement2(array);

//2
//შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით. 

let reverseCount = () => {
    for(let i=10; i>0; i--) {
        console.log(i);
    }
}

let reverseCount2 = () => {
    let count2=10;
    while(count2>0) {
        console.log(count2);
        count2--;
    }
}

reverseCount();
reverseCount2();
//3
// მოცემული მასივიდან
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

let names = ['John', 'Nick', 'Bob' , 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];

let removeBob1 = (names) => {
    for (let i = 0; i < names.length; i++) {
        if(names[i] === "Bob") {
            names.splice(i,1);
            i--;
        }
    }
    return names;
}

let removeBob2 = (names) => {
    let count3 = 0 
    while (count3<names.length){
        if(names[count3] === "Bob") {
            names.splice(count3,1);
        } else {
            count3++;
        }
    }
    return names;
}

console.log(removeBob1(names));
console.log(removeBob2(names));

let removeBob = (array) => {
    let newArray = array.filter((item) => item!=="Bob");
    console.log(newArray);
}

removeBob(names)

//4
// ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

let fun = (number, power) => {
    let result;
    if(power>0) {
        result = number;
        for(let i=1; i<power; i++) {
            result = result*number;
        }
    } else if(power <0) {
        result = 1/number;
        for(let i=power+1; i<0; i++) {
            result = result*(1/number);
        }
    } else {
        return 1;
    }
    return result;
}

let fun2 = (number, power) => {
    let result;
    if(power>0) {
        let count4 = 1;
        result = number;
        while (power>count4) {
            result = result*number;
            count4++;
        }
    } else if(power <0) {
        let count4 = power+1;
        result = 1/number;
        while(count4<0) {
            result = result*(1/number);
            count4++
        }
    } else {
        return 1;
    }
    return result;
}

console.log(fun(5,3));
console.log(fun2(5,3));

//5
// შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.
// მაგ. 
// 1
// 2
// 3 Fizz
// 4
// 5 Buzz
// 6 Fizz
// 7
// 8
// 9 Fizz
// 10 Buzz
// 11
// 12 Fizz
// 13
// 14
// 15 FizzBuzz
// … 100-მდე.

let addNamesToNumbers = () => {
    for(let i=1; i<=100; i++) {
        if (i%15 === 0) {
            console.log(`${i} FizzBuzz`);
        } else if(i%5 === 0) {
            console.log(`${i} Buzz`);
        } else if(i%3 === 0) {
            console.log(`${i} Fizz`);
        } else {
            console.log(i);
        }
    }
}

addNamesToNumbers()

//6
// შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 

let factorialCalculator = (number) => {
    if (number > 0) {
        let result = 1;
        for(let i=1; i<=number; i++) {
            result = result*i;
        }
        return result;
    } else if(number === 0) {
        return 1;
    } else {
        return "wrong number";
    }
}

let factorialCalculator2 = (number) => {
    if (number > 0) {
        let result = 1;
        let count6 = 1;
        while(count6<=number) {
            result = result*count6;
            count6++;
        }
        return result;
    } else if(number === 0) {
        return 1;
    } else {
        return "wrong number";
    }
}

console.log(factorialCalculator(4));
console.log(factorialCalculator2(4));

//7
// შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

let capitaliseFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
}
console.log(capitaliseFirstLetter("nika"));


//8
// შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

let blankStringChecker = (testString) => {
    if(testString.length > 0) {
        console.log("this string is not blank");
    } else {
        console.log("this string is blank");
    }
}

blankStringChecker("nika")

//9
// შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

let stringToArray = (testString) => {
    console.log(testString.split(", "));
}

stringToArray("1, 2, 3, 4");

//10
// შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.
// წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.

let mailSecure = (gmail) => {
    let itIsLastname = false;
    let tmp = gmail;
    for(let i=0; i<gmail.length; i++) {
        if(itIsLastname) {
            tmp = tmp.slice(0,i-1)+"."+tmp.slice(i,gmail.length);
        }
        if(gmail[i]==='.') {
            itIsLastname=true;
        }
        if(gmail[i]==='@' && itIsLastname) {
            itIsLastname=false;
            return tmp;
        }
    }
    return "not valid mail";
}

console.log(mailSecure("nika.k@gmail.com"));
