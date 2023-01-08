'use strict';

//select elements
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

//Starting Conditions
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//rolling Dice funtionallity
btnRoll.addEventListener('click', function () {
  //create a random dice No.
  const diceNo = Math.trunc(Math.random() * 6) + 1;
  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNo}.png`;
  //if dice not 1 let continue if it 1 change player
  if (diceNo !== 1) {
    //add dice no to current score
    currentScore += diceNo;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch user
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
