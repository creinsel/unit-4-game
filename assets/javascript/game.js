$(document).ready()
// generate random number betweer 19-120
var randomNumber=Math.floor(Math.random()*102)+19; 
var wins=0;
var losses=0;
var totalScore=0;
var crystalValues=[];


//generate 4 random values between 1-12 and push to crystalValues array
function fourNum(){
    for (let index = 0; index < 4; index++) {
    var crystInd = Math.floor(Math.random()*13);
    crystalValues.push(crystInd);
}
};
console.log(crystalValues)

function clearCrys(){
    crystalValues=[];
}

// resets game if player is finished

function reset(){
    // resets total score to zero
    totalScore=0;
    crystalValues;
    fourNum();
    //generates random number
    randomNumber=Math.floor(Math.random()*102)+19;
   // writes random number to screen 
    $(".score").text(randomNumber);
    $(".score-pop").empty();
    
    console.log(crystalValues);
};
   
 

//$(".score").text(randomNumber);
$(".wins").text(wins);
$(".losses-num").text(losses);
$(".score-pop").text(totalScore);


//assign random crystalValues to crystalPics through click event
 $("#img-1").on("click", function(){
     totalScore= totalScore+ crystalValues[0];
     console.log(totalScore);
     $(".score-pop").text(totalScore);
     if(totalScore===randomNumber){
        wins++;
        $(".wins").text(wins);
        alert("Winner Winner Chicken Dinner!");
        clearCrys();
        reset();
    }
    
    else if(totalScore>randomNumber){
        losses++;
        $(".losses-num").text(losses);
        alert("Your score does not match the random number, try again");
        clearCrys();
        reset();
    }
    
     
 });

$("#img-2").on("click", function(){
    totalScore= totalScore+ crystalValues[1];
    console.log(totalScore);
    $(".score-pop").text(totalScore);
    if(totalScore===randomNumber){
        wins++;
        $(".wins").text(wins);
        alert("Winner Winner Chicken Dinner!");
        clearCrys();
        reset();
    }
    
    else if(totalScore>randomNumber){
        losses++;
        $(".losses-num").text(losses);
        alert("Your score does not match the random number, try again");
        clearCrys();
        reset();
    }
    
});

$("#img-3").on("click", function(){
    totalScore= totalScore+ crystalValues[2];
    console.log(totalScore);
    $(".score-pop").text(totalScore);
    if(totalScore===randomNumber){
        wins++;
        $(".wins").text(wins);
        alert("Winner Winner Chicken Dinner!");
        clearCrys();
        reset();
    }
    
    else if(totalScore>randomNumber){
        losses++;
        $(".losses-num").text(losses);
        alert("Your score does not match the random number, try again");
        clearCrys();
        reset();
        
    }
   
})

$("#img-4").on("click", function(){
    totalScore= totalScore+ crystalValues[3];
    console.log(totalScore);
    $(".score-pop").text(totalScore);
    if(totalScore===randomNumber){
        wins++;
        $(".wins").text(wins);
        alert("Winner Winner Chicken Dinner!");
        clearCrys();
        reset();
    }
    
    else if(totalScore>randomNumber){
        losses++;
        $(".losses-num").text(losses);
        alert("Your score does not match the random number, try again");
        clearCrys();
        reset();
       
        
}
});

    reset();
  



