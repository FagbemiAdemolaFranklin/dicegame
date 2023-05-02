
const randomNumberOne = Math.floor(Math.random() * 6 + 1);
const randomNumberTwo = Math.floor(Math.random() * 6 + 1);


document.querySelector('.img1').setAttribute('src', 'images/dice' + randomNumberOne + '.png');
document.querySelector('.img2').setAttribute('src', 'images/dice' + randomNumberTwo + '.png');



if (randomNumberOne > randomNumberTwo) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins!' 
} else if (randomNumberTwo > randomNumberOne){
    document.querySelector('h1').innerHTML = 'Player 2 Wins!' 
} else{
    document.querySelector('h1').innerHTML = 'Draw!!' 
}