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
let endState = stateLookup.length - 1

function Game()
{
    this.setHangedState = (newState) => {
        let set = false

        if (0 <= newState && newState < stateLookup.length) {
            this.hangedState = newState
            this.hanged.src = stateLookup[newState]
            set = true;
        }

        return set
    }

    this.onKeyDown = (event) => {
        // NOTE: must use arrow function so that `this` is correctly captured

        if (event.key.match(/^[a-zA-Z]$/)) {
            // a letter was guessed

            let letter = event.key.toLowerCase()
            console.log(event, letter)

            this.setHangedState(this.hangedState + 1)

            if (this.hangedState >= endState) {
                this.end()
            }
        }
    }

    this.end = () => {
        console.log('Game Over')
        document.removeEventListener('keydown', this.onKeyDown)

        this.button.style.display = 'block'
    }

    this.button = document.getElementById('start-game')
    this.hanged = document.getElementById('hanged')

    this.hangedState = 0
    this.setHangedState(this.hangedState)

    this.button.style.display = 'none'
    document.addEventListener('keydown', this.onKeyDown)
}
