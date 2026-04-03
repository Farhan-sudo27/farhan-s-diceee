var randomNumber1= Math.random();
randomNumber1*=6;
randomNumber1 = Math.ceil(randomNumber1);
var randomDiceImage1=("dice" + randomNumber1 + ".png");
var diceImage1 = ("./images/"+randomDiceImage1);

var leftDice = document.querySelectorAll("img")[0];
leftDice.setAttribute("src", diceImage1);

var randomNumber2= Math.random();
randomNumber2*=6;
randomNumber2 = Math.ceil(randomNumber2);
var randomDiceImage2=("dice" + randomNumber2 + ".png");
var diceImage2 = ("./images/"+randomDiceImage2);

var rightDice= document.querySelectorAll("img")[1];
rightDice.setAttribute("src", diceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!"
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="It's A Fokin Draw this time"
}

