"use strict"

let stateLookup = [
    'img/hanged0.png',
    'img/hanged1.png',
    'img/hanged2.png',
    'img/hanged3.png',
    'img/hanged4.png',
    'img/hanged5.png',
    'img/hanged6.png',
]
let endState = stateLookup.length - 1

let wordList = [
    'jazz',
    'pony',
    'prestidigitation',
    'cat',
    'exponential',
    'javascript',
    'dog',
    'ferret',
]

function sample(list)
{
    return list[Math.floor(Math.random() * list.length)]
}

function Game()
{
    this.setHangedState = function(newState) {
        let set = false

        if (0 <= newState && newState < stateLookup.length) {
            this.hangedState = newState
            this.hanged.src = stateLookup[newState]
            set = true
        }

        return set
    }

    this.displayText = function(text) {
        this.textDisplay.textContent = text
    }

    this.guessed = {}
    this.guess = function(letter) {
        this.displayText('') // clear text display

        if (this.guessed[letter]) {
            this.displayText('You have already guessed "'+letter+'".')
        }
        else {
            this.guessed[letter] = true

            if (this.word.indexOf(letter) === -1) {
                // bad guess

                this.setHangedState(this.hangedState + 1)

                if (this.hangedState >= endState) {
                    this.end('Game Over\nOut of guesses.')
                }
            }
            else {
                let gameWon = this.updateWordDisplay()
                if (gameWon) {
                    this.end('You Win\nCongradulations!')
                }
            }
        }
    }

    this.updateWordDisplay = function() {
        let newHTML = ''
        let gameWon = true

        for (let letter of this.word) {
            if (this.guessed[letter.toLowerCase()] === undefined) {
                letter = '&nbsp;'
                gameWon = false
            }

            newHTML += '<span class="good-guess-letter">'+letter+'</span>'
        }

        this.goodGuessDisplay.innerHTML = newHTML

        return gameWon
    }

    let _this = this
    this.onKeyDown = function(event) {
        if (event.key.match(/^[a-zA-Z]$/)) {
            _this.guess(event.key.toLowerCase())
        }
    }

    this.end = function(message) {
        this.displayText(message)
        document.removeEventListener('keydown', this.onKeyDown)

        this.startButton.style.display = 'block'
    }

    // get references to our HTML elements
    this.startButton = document.getElementById('start-game')
    this.hanged = document.getElementById('hanged')
    this.goodGuessDisplay = document.getElementById('good-guess-display')
    this.badGuessDisplay = document.getElementById('bad-guess-display')
    this.textDisplay = document.getElementById('text-display')

    // initialize game state
    this.word = sample(wordList)
    this.setHangedState(0)

    // set up display
    this.startButton.style.display = 'none'
    this.updateWordDisplay()
    document.addEventListener('keydown', this.onKeyDown)
}
