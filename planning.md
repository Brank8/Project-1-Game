# *Welcome to Triviagraphy*

## *User stories*
- As a player, I would like to start the game when I am ready.
- As a player, I would like to review the rules of the game before I start the game.
- As a player, I would like to begin answering the questions 1-20 in less than 10 seconds each.
- As a player, I would like to check how many questions I got correct in total.
- As a player, I would like to play again.

![Alt text](image.png)

## *Pseudocode for the overall game play.*

1. SETUP
    - Write notes about functions needed, do the HTML and CSS styling of the game.

2. INIT
    - Add "Let's play" button
    - Create an array with all 20 questions and 4 possible answers and a correct answer
    - Add next quesion with 4 answers order after each question answered
    - Add green/red button if the answer is right/wrong, also add timer 3sec once answered
    - Deal with correct/wrong answers stats

3.  RENDER
    - If question not answered within 10sec then it counts as wrong
    - Add the function if player has 16/20 answers correct, player wins, otherwise player looses
    - Add listener ('Click')
    - Add a timer 10sec per question

4.  FINAL
    - Calculate total correct answers
    - Update total correct/wrong answers
    - Declare win or loss
    - Play again