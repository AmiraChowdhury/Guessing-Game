//initializing value
let totalAttempt=5;
let Attempt = 0;
let totalWon=0;
let totslLost=0;



//finding elements

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const chechButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText ");
const lostWon = document.createElement("p");
const remainingAttempt = cardBody.querySelector(".remainingAttempt");

form.addEventListener("submit",function(event)
{
    event.preventDefault();
    chechResult(guessingNumber.value);
    
})

function chechResult(guessingNumber){
       
        const RandomNumber = getRandomNumber(5);
       if(guessingNumber==RandomNumber){
        resultText.innerHTML= `You have won`;
        totalWon++;
       }else{
        resultText.innerHTML= `You have lost; random number was: ${RandomNumber}`;
        totslLost++;
       }
       lostWon.innerHTML=`Won:${totalWon}, Lost:${totslLost}`;
       lostWon.classList.add("large-text");
       cardBody.appendChild(lostWon);
    }

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;

}