
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
// isFinished= true 
if(totalScore===randomNumber){
    wins++;
    alert("Winner Winner Chicken Dinner!")
    isFinished=true;}

    if(totalScore>randomNumber){
        losses++;
        alert("Your score does not match the random number, try again")
        isFinished=true
    };

// resets game if player is finished
function reset(){
    if(isFinished){
    var totalScore=0;
    var randomNumber=Math.floor(Math.random()*102)+19;
    var crystalValues=[];
    }
};

reset();
$(".score").text(randomNumber);
$(".wins").text(wins);
$(".losses-num").text(losses);

//generate 4 random numbers between 1-12
for (let index = 0; index < 4; index++) {
    const element = Math.floor(Math.random()*13);
    crystalValues.push(element);
}
console.log(crystalValues)

//assign random numbers to pics

