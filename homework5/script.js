// 1.	ქვემოთ მოცემულ კოდში დაშვებულია ლოგიკური შეცდომა
let action = 'move';

switch (action) {
    case "move":
        alert("You're moving!");
        break;
    case "jump":
        alert("You're jumping!");
        break;
    case "run":
        alert("You're running!");
        break;
    default:
        alert("Invalid action.");
}

// 2.	switch-ის გამოყენებით შეავსეთ გამოტოვებული ადგილები ისე, რომ თუ ბოსტნეული (vegetables) სტაფილოზე (carrot) დგას გამოიტანოს “Hello” და თუ “Broccoli” ზე დგას გამოიტანოს “Welcome”.
let vegetables = "Brooli";

switch (vegetables) {
    case "Carrot":
        alert("Hello");
        break;
    case "Broccoli":
        alert("Welcome");
        break;
}

switch (vegetables) {
    case "Carrot":
        alert("Hello");
        break;
    case "Broccoli":
        alert("Welcome");
        break;
    default:
        alert("Neither");
}

// 3.	შექმენით ხმის მიცემის უფლების შემმოწმებელი ფუნქცია. თუ მომხმარებლის ასაკი ნაკლებია 18-ზე უნდა გამოჩნდეს, რომ მას არ შეუძლია ხმის მიცემა, თუ მისი ასაკი მეტია 18-ზე უნდა გამოჩნდეს, რომ მომხმარებელს შეუძლია ხმის მიცემა.
let age = 17;

let adult = age<18 ? "You can not vote" : "You can vote";

console.log(adult);

// 4.	შექმენით პაროლის სიძლიერის შემმოწმებელი ფუნქცია, ფუნქციამ უნდა მიიღოს პარამეტრის სახით შესამოწმებელი პაროლი, პირობა ასეთია:
// 1. თუ პაროლი შედგება 3-ზე ნაკლები სიმბოლოსგან იგი უარგისია.
// 2. თუ პაროლი შედგება მინ. 3 მაქ. 6 სიმბოლოსგან იგი სუსტია
// 3. თუ პაროლი შედგება მინ. 6 მაქ. 8 სიმბოლოსგან იგი მისაღებია
// 4. თუ პაროლი შედგება მინ. 8 მაქ. 16 სიმბოლოსგან იგი ძლიერია.
// 5. თუ პაროლი მხოლოდ რიცხვებისგან შედგება იგი უვარგისია.
let password = "1234/2";

let checkPassword = (password) => {
    if(Number(password) >= 0 && Number.isInteger(Number(password))) {
        return "უარგისი";
    } else {
        if(password.length < 3) {
            return "უარგისი";
        } else if(password.length <= 6) {
            return "სუსტი";
        } else if(password.length <= 8) {
            return "მისაღები";
        } else if(password.length <= 16) {
            return "ძლიერი";
        } else {
            return "გრძელია";
        }
    }
}

console.log(checkPassword(password));

// 5. შექმენით Quiz-ის პროგრამა შემდეგი პირობების გათვალისწინებით:
// საჭიროა გქონდეთ მინიმუმ 5 სხვადასხვა შეკითხვა.
// ჩაშენებული პირობითი ოპერატორების მეშვეობით გააკეთეთ ისე, რომ მომხმარებელს შეეძლოს თითოეული ამ შეკითხვიდან მომდევნო შეკითხვაზე გადასვლა, მხოლოდ იმ შემთხვევაში თუ წინა შეკითხვას სწორად უპასუხებს.
// მაგ. თუ მომხმარებელი გასცემს სწორად პასუხს პირველ შეკითხვას, მხოლოდ ამ შემთხვევაში უნდა მოხდეს მისი მეორე შეკითხვაზე გადაყვანა იგივე დანარჩენ შეკითხვებზეც.
let quiz = function () {
    let score = 0;
    let question1 = prompt("1+1");
    if(Number(question1) === 2) {
        score++;
        let question2 = prompt("2+2");
        if(Number(question2) === 4) {
            score++;
            let question3 = prompt("3+3");
            if(Number(question3) === 6) {
                score++;
                let question4 = prompt("4+4");
                if(Number(question4) === 8) {
                    score++;
                    let question5 = prompt("5+5");
                    if(Number(question5) === 10) {
                        score++;
                    }
                }
            }
        }
    }  
    return score;
} 

console.log(`Your score is - ${quiz()}`);