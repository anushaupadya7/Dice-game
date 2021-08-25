var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber2 + ".png";
var randomSourceImage = "images/" + randomImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSourceImage);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML=" 🚩Player 1 wins"
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML=" 🚩Player 2 wins"
}
else
{
    document.querySelector("h1").innerHTML=" 🚩Draw!"
}