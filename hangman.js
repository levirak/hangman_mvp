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
    'cat',
    'rat',
    'dog',
    'pony',
    'jazz',
    'ferret',
    'candy',
    'Germany',
    'England',
    'JavaScript',
    'exponential',
    'prestidigitation',
]

function sample(list)
{
    return list[Math.floor(Math.random() * list.length)]
}

function Game()
{
    this.setHangedState = function(newState) {
        if (0 <= newState && newState < stateLookup.length) {
            this.hangedState = newState
            this.hangedMan.src = stateLookup[newState]
        }
    }

    this.setWord = function(word) {
        this.word = word
        this.lowerCaseWord = word.toLowerCase()
    }

    this.displayText = function(text) {
        this.textDisplay.innerText = text
    }

    this.guess = function(letter) {
        this.displayText('')

        if (this.guessed[letter]) {
            this.displayText('You have already guessed "'+letter+'".')
        }
        else {
            this.guessed[letter] = true
            this.updateGuessDisplay()

            if (this.lowerCaseWord.indexOf(letter) === -1) {
                // bad guess

                this.setHangedState(this.hangedState + 1)
                if (this.hangedState >= endState) {
                    this.end('Game Over\nOut of guesses.\nThe word was "'+this.word+'"')
                }
            }
            else {
                // good guess

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
            if (!this.guessed[letter.toLowerCase()]) {
                letter = '&nbsp;'
                gameWon = false
            }

            newHTML += '<span class="guessed-letter">'+letter+'</span>'
        }

        this.goodGuessDisplay.innerHTML = newHTML

        return gameWon
    }

    this.updateGuessDisplay = function() {
        let newHTML = ''

        for (let letter in this.guessed) {
            newHTML += '<span class="guessed-letter">'+letter+'</span>'
        }

        this.allGuessDisplay.innerHTML = newHTML
    }

    this.onKeyDown = (function(event) {
        if (event.key.match(/^[a-zA-Z]$/)) {
            this.guess(event.key.toLowerCase())
        }
    }).bind(this)

    this.end = function(message) {
        // disarm the game
        document.removeEventListener('keydown', this.onKeyDown)

        // set up display
        this.displayText(message)
        this.startButton.style.display = 'block'
    }

    // get references to our HTML elements
    this.startButton = document.getElementById('start-game')
    this.hangedMan = document.getElementById('hanged')
    this.goodGuessDisplay = document.getElementById('good-guess-display')
    this.allGuessDisplay = document.getElementById('all-guess-display')
    this.textDisplay = document.getElementById('text-display')

    // initialize game state
    this.guessed = {}
    this.setWord(sample(wordList))
    this.setHangedState(0)

    // set up display
    this.startButton.style.display = 'none'
    this.displayText('')
    this.updateWordDisplay()
    this.updateGuessDisplay()

    // arm the game
    document.addEventListener('keydown', this.onKeyDown)
}
