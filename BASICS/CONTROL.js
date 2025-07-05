//Control statements
//Control statements are used to control the flow of execution in a program.
//They allow you to make decisions, repeat actions, and handle errors.
let marks = 85;
if(marks>=90){
    console.log("You got an A grade");
}
else if(marks>=80){
    console.log("You got a B grade");
}
else if(marks>=70){
    console.log("You got a C grade");
}
else if(marks>=60){
    console.log("You got a D grade");
}
else if(marks<=50){
    console.log("You got an F grade");  
}

//Short form of if-else statement
let age = 18;
let canVote = (age >= 18) ? "You can vote" : "You cannot vote";
console.log(canVote);

//Switch statement
let cricket=1
switch(cricket){
    case 1:
        console.log("ROHITH SHARMA IS THE GOD OF CRIRKCT");
        break;
    case 2:
        console.log("VIRAT KOHLI IS THE KING OF CRICKET");
        break;
    case 3:
        console.log("KL RAHUL IS THE CLASS  OF CRICKET");
        break;
    default:
        console.log("INVALID CHOICE BUT U LOVE CRICKET");
        break;
}