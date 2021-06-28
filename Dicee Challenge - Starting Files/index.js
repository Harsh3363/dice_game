var randomNumber1 = Math.floor((Math.random()*6))+1;
var imagesrc1 = "images/dice" + randomNumber1 + ".png";
var changeimage1 = document.querySelectorAll("img")[0];
changeimage1.setAttribute("src" , imagesrc1);

var randomNumber2 = Math.floor((Math.random()*6))+1;
var imagesrc2 = "images/dice" + randomNumber2 + ".png";
var changeimage2 = document.querySelectorAll("img")[1];
changeimage2.setAttribute("src" , imagesrc2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins🏁 "}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins🏁 "
}
else(document.querySelector("h1").innerHTML = "Draw");
