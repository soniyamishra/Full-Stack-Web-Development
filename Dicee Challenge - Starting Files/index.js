var randomnumber1=Math.floor((Math.random()*6)+1);
var a="images/dice"+randomnumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",a);

var randomnumber2=Math.floor((Math.random()*6)+1);
var b="images/dice"+randomnumber1+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",b);

if(randomnumber1>randomnumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 wins"
}
else if(randomnumber1<randomnumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 wins"

}
else{
    document.getElementsByTagName("h1")[0].innerHTML="Draws"
}