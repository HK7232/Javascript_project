//Coding procedure
//1. set a random number
//2. user input a number, and click 'go' button
//3. if a user pick the random number, display 'You Got It!'
//4. if the user input number < the random number, display 'Up!'
//5. if the user input number > the random number, display 'Down!'
//6. 'Reset' button makes the game start again.
//7. After trying 5 times, the game is over (the go button disabled)
//8. If a number less than 1 or more than 100 come, let a user know and the chance doesn't go down.
//9. If a user input the repeated number, let the user know and the chance doesn't go down.

//to pick a random number
let computerNum = 0;

//to bring and back between html and js
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5 //a max number a user can try, decreased by each try
let gameOver = false;
let chanceArea = document.getElementById("chance-area")
let history=[] //for Procedure #9. Save numbers in a history array to compare.

//make the button to do something when it is clicked
//when "click" event happen, 'play' function works.
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){userInput.value=""});


//Function for making a random number
//Math.floor cut below point
//Math.random create a random number between 0 and 1.
//Add +1 to fill up to 1 to 100.
function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("Answer:", computerNum);
}



//function worked when the 'play-button' is clicked
function play(){
    let userValue = userInput.value;

    //Procedure #8.
    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "Input a number between 1 and 100!"
        return;
    }

    //Procedure #9.
    if(history.includes(userValue)){
        resultArea.textContent="This is a number you already input."
        return;
    }

    chances --; //whenever play happens, chances decrease by 1.
    chanceArea.textContent = `You can try ${chances} times!`
    console.log("Chances", chances)

    if(userValue < computerNum){
        resultArea.textContent = "Up!"
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!"
    }else{
        resultArea.textContent = "You Got It!!!"
        gameOver = true;
    }    

    //Procedure #9.
    history.push(userValue);
    console.log(history);
   

    //Procedure #7
    if(chances < 1){
        gameOver = true;
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}

//what is 'reset'? Empty any numbers in the user input area
//new pickRandomNum is created by clicking the 'reset' button
function reset(){
    userInput.value = ""
    pickRandomNum()
    resultArea.textContent = "Result displayed here!!"
    chanceArea.textContent = `You can try 5 times!`
    playButton.disabled = false;
}

pickRandomNum()
