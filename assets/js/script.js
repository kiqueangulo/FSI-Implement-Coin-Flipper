// TODO: Declare any global variables we need
let numberOfHeadRolls = 0
let numberOfTailRolls = 0
let percentHeads = 0
let percentTails = 0
const flipBtn = document.querySelector('#flip')
const pennyImage = document.querySelector('#coinImage')
const message = document.querySelector('#message')
const heads = document.querySelector('#heads')
const tails = document.querySelector('#tails')
const headsPercent = document.querySelector('#heads-percent')
const tailsPercent = document.querySelector('#tails-percent')
const clearBtn = document.querySelector('#clear')

document.addEventListener('DOMContentLoaded', function () {
    
    // TODO: Add event listener and handler for flip and clear buttons
    flipBtn.addEventListener('click', function() {
        let flippedHeads = Math.random() < 0.5
        
        // Flip Button Click Handler
            // TODO: Determine flip outcome
            // TODO: Update image and status message in the DOM
        if(flippedHeads) {
            pennyImage.setAttribute('src','assets/images/penny-heads.jpg')
            message.textContent = 'You flipped heads!'
            numberOfHeadRolls++
        } else {
            pennyImage.setAttribute('src','assets/images/penny-tails.jpg')
            message.textContent = 'You flipped tails!'
            numberOfTailRolls++
        }

        let total = numberOfHeadRolls + numberOfTailRolls

        if(total > 0) {
            percentHeads = Math.round(numberOfHeadRolls / total * 100)
            percentTails = Math.round(numberOfTailRolls / total * 100)
        }

        // Update the scorboard
        updateScoreBoard()
    })

    // TODO: Calculate the total number of rolls/flips
    // Make variables to track the percentages of heads and tails
    // TODO: Use the calculated total to calculate the percentages
    // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
    // TODO: Update the display of each table cell
    function updateScoreBoard() {
        heads.textContent = numberOfHeadRolls
        tails.textContent = numberOfTailRolls
        headsPercent.textContent = `${percentHeads}%`
        tailsPercent.textContent = `${percentTails}%`
    }

    // Clear Button Click Handler
    // TODO: Reset global variables to 0
    // TODO: Update the scoreboard (same logic as in flip button click handler)
    clearBtn.addEventListener('click', function() {
        numberOfHeadRolls = 0
        numberOfTailRolls = 0
        percentHeads = 0
        percentTails = 0
        updateScoreBoard()
        message.textContent = 'Let\' get rolling!'
    })

})