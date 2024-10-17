// function play(){
//    const homeSection=document.getElementById('home-screen');
//    homeSection.classList.add('hidden'); 

// //    show playground
// const playGround=document.getElementById('playground');
// playGround.classList.remove('hidden');

// }

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
showElementById('playground');
continueGame();

}