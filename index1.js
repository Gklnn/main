var prediction = Math.floor(Math.random() * 6) + 1;

var result = "image/" + "dice" + prediction + ".png";

var predictiontwo = Math.floor(Math.random() * 6) + 1;

var resulttwo = "image/" + "dice" + predictiontwo + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",result);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",resulttwo);

if(prediction > predictiontwo)
{
     document.querySelector("h1").textContent = "player 1 wins";
    
}
else
{
    document.querySelector("h1").textContent = "player 2 wins";
}
