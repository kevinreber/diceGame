//1-6
var randomNumber1 = (Math.floor(Math.random() * (6))) + 1;

// dice1.png - dice6.png
var randomDiceImage1 = 'dice' + randomNumber1 + '.png';

// images/dice1.png - images/dice6.png
var randomImageSource1 = 'images/' + randomDiceImage1;

//select first image (left dice)
var image1 = document.querySelectorAll('img')[0];

//src is attribute name,chooses new image to replace existing
image1.setAttribute('src', randomImageSource1);

//generate random number
var randomNumber2 = Math.floor(Math.random() * 6) +1;
//select random image
var randomImageSource2 = 'images/dice' + randomNumber2 +'.png';
//select second image in document(right dice)    //change existing image
var image2 = document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

//select h1 text
var diceResult = document.querySelector('h1');
//change button text
var buttonText = document.querySelector('button');

//name winner
if(randomNumber1 === randomNumber2){
  diceResult.innerHTML = '🚩 Draw! 🚩';
  buttonText.innerHTML = 'Play Again?';
}
if(randomNumber1 > randomNumber2){
  diceResult.innerHTML = '🚩 Player1 wins!';
  buttonText.innerHTML = 'Play Again?';
}
if(randomNumber1 < randomNumber2){
  diceResult.innerHTML = 'Player2 wins! 🚩';
  buttonText.innerHTML = 'Play Again?';
}
