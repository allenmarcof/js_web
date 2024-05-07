// Exercise 1 Function Basic
function greet(name) {
    console.log(name);
    return;
}
greet("Marco");

// Exercise 2 Function Expression
function expression(num1, num2){
    return num1 + num2;
}
let out = expression(5, 3);
console.log("The sum of 2 numbers is: " + out);

// Exercise 3 Is Even?
function isEven(number){
    if(number % 2 == 0) {
        console.log("The Number " + number + " is Even.");
    }
    else {
        console.log("The Number " + number + " is Odd.");
    }
}
isEven(4);
isEven(5);

// Exercise 4 Grade Calculator
function gradeCalc(grade) {

    grade = prompt("Wwhat grade did you got?");
    
        if(grade >= 90) {
            alert("You got 'A' grade");
        }
        else if(grade >= 80) {
            alert("You got 'B' grade");
        }
        else if(grade >= 70) {
            alert("You got 'C' grade");
        }
        else if(grade >= 60) {
            alert("You got 'D' grade");
        }
        else if(grade <= 60) {
            alert("You got 'F' grade");
        }
}


