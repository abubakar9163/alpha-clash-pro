// function play(){
//    const homeSection=document.getElementById('home-screen');
//    homeSection.classList.add('hidden'); 

// //    show playground
// const playGround=document.getElementById('playground');
// playGround.classList.remove('hidden');

// }
function handlekeyboardKeyUpEvent(event){
    const playerPress=event.key;
    // console.log( 'player pressed',event.key);
    console.log('player pressed',playerPressed)

    // stop the game
    if(playerPressed==='Escaped'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText
    const expectedAlphabet=currentAlphabet.toLowerCase();
    console.log(playerPress,expectedAlphabet);

    // check match or not
    if(playerPress===expectedAlphabet){
        console.log('you get point');
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText
        // const currentScore=parseInt(currentScoreText);
        // console.log(currentScoreText);

        // // increat 1 score
        // const newScore=currentScore+1;
        // currentScoreElement.innerText=newScore;
//''''''''''''''''''''''''''''''''''''
const currentScore=getTextElementById('current-score');
const updatedScore=currentScore+1;
setTextElementValueById('current-score',updatedScore);



// display

        console.log('You have pressed correctly',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        
        continueGame();
    }
    else{
        console.log('You missed you lost a life');
      
        const currentLife=getTextElementById('current-life');
        const updatedLife=currentLife-1;
        setTextElementValueById('current-life',updatedLife);

        if (updatedLife===0){
            gameOver();
        }
        //:::::::::::::::::::::::::::::
        // step1:get the current life number
        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);
        

        // // step2:reduce the life count
        // const newLife=currentLife-1;
        


        // // step3:display the updated life count
        // currentLifeElement.innerText=newLife;

        // or


    }


}
document.addEventListener('keyup',handlekeyboardKeyUpEvent)

function continueGame(){
const alphabet=getARandomAlphabet();
console.log('random alphabets:',alphabet);
// set randomly geneated alphabet to the screen
const currentAlphabetElement=document.getElementById('current-alphabet');
currentAlphabetElement.innerText= alphabet;

// set background color
setBackgroundColorById(alphabet);

}

function play(){

hideElementById('home-screen');
hideElementById('final-score');
showElementById('playground');
// reset score and life
setTextElementValueById('current-life',5);
setTextElementValueById('current-score',0);

continueGame();

}

function gameOver(){
    hideElementById('playground');
showElementById('final-score');
// update final score
const lastScore=getTextElementById('current-score');
setTextElementValueById('last-score',lastScore);
// clear the last sected alphabet
const currentAlphabet=getElementTextById('current-alphabet');
removeBackgroundColorById(currentAlphabet);


}