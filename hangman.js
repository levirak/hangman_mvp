"use strict"

let stateLookup = [
    'img/hanged0.png',
    'img/hanged1.png',
    'img/hanged2.png',
    'img/hanged3.png',
    'img/hanged4.png',
    'img/hanged5.png',
    'img/hanged6.png',
];

function guessKey(event)
{
    if (65 <= event.keyCode && event.keyCode <= 90) {
        let letter = String.fromCharCode(event.keyCode)
        console.log(event, letter)
    }
}

function Game() {
    this.setHangedState = function(newState) {
        let incremented = false

        if (0 <= newState && newState < stateLookup.length) {
            this.state = newState
            this.hanged.src = stateLookup[newState]
            incremented = true;
        }

        return incremented
    }

    this.hanged = document.getElementById('hanged')
    this.state = 0
    this.end = () => {
    }

    this.setHangedState
}
