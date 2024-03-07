const getRandomFood = require('random-food-selector');
const getRandomDrink = require('random-drink-selector');
const getRandomColor = require('random-color-selector');
const getRandomReligion = require('random-religion-selector');
const getRandomJob = require('random-job-selector');
const getRandomHobby = require('random-hobby-selector');
const guessSmartphone = require('guess-smartphone');

function guessIQ() {
    const food = getRandomFood();
    const drink = getRandomDrink();
    const color = getRandomColor();
    const religion = getRandomReligion();
    const job = getRandomJob();
    const hobby = getRandomHobby();
    const smartphone = guessSmartphone();
    console.log(`Your random food is: ${food.name}`);
    console.log(`Your random drink is: ${drink.name}`);
    console.log(`Your random color is: ${color}`);
    console.log(`Your random religion is: ${religion}`);
    console.log(`Your random job is: ${job}`);
    console.log(`Your random hobby is: ${hobby}`);
    console.log(`Your guessed smartphone is: ${smartphone}`);
    // You can replace this with your own logic to guess an IQ
    const iq = Math.floor(Math.random() * (160 - 70 + 1)) + 70;
    console.log(`The guessed IQ based on the data is: ${iq}`);
}

module.exports = guessIQ;
