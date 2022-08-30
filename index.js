var randomNum1 = Math.floor(Math.random() * 6) + 1;


 var randomDiceImage = "dice" + randomNum1 + ".png";   //dice1 - dice6
 var randomImgSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImgSource2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

//If player1 wins
if(randomNum1 > randomNum2)
{
  document.querySelector("h1").innerHTML = "🚩Player1 won";
}
else if(randomNum2 > randomNum1)
{
  document.querySelector("h1").innerHTML = "Player2 wins🚩";
}
else
{
  document.querySelector("h1").innerHTML = "Draw!😐";
}
