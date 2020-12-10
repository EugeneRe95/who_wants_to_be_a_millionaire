# Task manager app
http://eugenere95.github.io/who_wants_to_be_a_millionaire

## Technologies
React, Redux, React-Router, SCSS, Rest_API

## Functionality

1. All questions are fetched from JSON API.

2. All data is the array of objects. Each object has such fiels: <br >

- title - question itself
- answers - array of answers, where each answer is an Object with such fields:
    - title - is the answer
    - answer status
    - correct - if the answer is correct
- rate - prize value for specific value

3. User picks the answer and it's status updated to selected/correct/wrong/disabled

4. If the answer is correct, the next question is displayed. Otherwise user is redirected to final screen with game score.

## Installation and launch

1. Open project folder in terminal

2. Run 'npm start'