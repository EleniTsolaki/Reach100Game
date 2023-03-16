'use strict';

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');

const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll ');
const btnHold = document.querySelector('.btn--hold');

score0Element.textContent = 0;
score1Element.textContent = 0;

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');


diceEl.classList.add('hidden');

let currentScore = 0;
const scores = [0, 0];
let activePlayer = 0;

let playing = true;


btnRoll.addEventListener('click', function () {
    if (playing) {

        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;

            player0Element.classList.toggle('player--active');
            player1Element.classList.toggle('player--active');


        }
    }


})

btnHold.addEventListener('click', function () {
    if (playing) {

        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            console.log("You won");

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        } else {
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            currentScore = 0;

            activePlayer = activePlayer === 0 ? 1 : 0;

            player0Element.classList.toggle('player--active');
            player1Element.classList.toggle('player--active');

        }

    }


});

btnNew.addEventListener('click', function () {

    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0
    playing = true;

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;

    diceEl.classList.add('hidden');

    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');


});
