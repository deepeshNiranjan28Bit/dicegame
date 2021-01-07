// this is prompt for name
var firstName=prompt("What is the first person name:");
var secondName=prompt("What is the second person name:");
// this replaicng name over dice
document.querySelectorAll("p")[0].innerHTML =firstName;
document.querySelectorAll("p")[1].innerHTML =secondName;
// this is for first dice image
var randomNumber1=Math.floor(Math.random()*6+1);
var randomDiceImage1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);
// this is for second dice image
var randomNumber2=Math.floor(Math.random()*6+1);
var randomDiceImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);
// this is for title
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML ="🎉 "+firstName+" wins.🎉 ";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML ="🎉 "+secondName+" wins.🎉 ";
}
else{
document.querySelector("h1").innerHTML ="Draw!";
}
