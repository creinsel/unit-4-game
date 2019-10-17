
// generate random number betweer 19-120
var randomNumber=Math.floor(Math.random()*102)+19; 
var wins=0;
var losses=0;
var totalScore=0;
var crystalValues=[];
//var crystalPics=["assets/images/image0.jpeg","assets/images/image2.jpeg","assets/images/image1.jpeg","assets/images/image3.jpeg"];
var isFinished= false;

//generate 4 random values between 1-12 and push to crystalValues array

    for (let index = 0; index < 4; index++) {
    var crystInd = Math.floor(Math.random()*13);
    crystalValues.push(crystInd);
};


console.log(crystalValues)

// resets game if player is finished

function reset(){
    // resets total score to zero
    var totalScore=0;
    //generates random number
    randomNumber;
   // writes random number to screen 
    $(".score").text(randomNumber);
    
};
   
reset();  

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
        isFinished=true;
    }
    
    else if(totalScore>randomNumber){
        losses++;
        $(".losses-num").text(losses);
        alert("Your score does not match the random number, try again");
        isFinished=true;
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
        isFinished=true;
    }
    
    else if(totalScore>randomNumber){
        losses++;
        $(".losses-num").text(losses);
        alert("Your score does not match the random number, try again");
        isFinished=true;
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
        isFinished=true;
    }
    
    else if(totalScore>randomNumber){
        losses++;
        $(".losses-num").text(losses);
        alert("Your score does not match the random number, try again");
        isFinished=true;
        
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
        isFinished=true;
    }
    
    else if(totalScore>randomNumber){
        losses++;
        $(".losses-num").text(losses);
        alert("Your score does not match the random number, try again");
        isFinished=true;
    }
    
})


if(isFinished=true){
    reset()
    };


