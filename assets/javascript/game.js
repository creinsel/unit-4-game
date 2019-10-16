
// generate random number betweer 19-120
var randomNumber=Math.floor(Math.random()*102)+19; 
var wins=0;
var losses=0;
var totalScore=0;
var crystalValues=[];
var crystalPics=["assets/images/image0.jpeg","assets/images/image2.jpeg","assets/images/image1.jpeg","assets/images/image3.jpeg"];
var isFinished= false;

// console log randomNumber
console.log(randomNumber)

//how game will know if player is finished playing
isFinished= true 
if(totalScore===randomNumber||totalScore>randomNumber);

// resets game if player is finished
function reset(){
    if(isFinished){
    var wins=0;
    var losses=0;
    var totalScore=0;
    var randomNumber=Math.floor(Math.random()*102)+19;//container-rn?
    var crystalValues=[];
    }
};


