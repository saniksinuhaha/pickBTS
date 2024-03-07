const getRandomFood = require('random-food-selector');
const getRandomDrink = require('random-drink-selector');
const getRandomColor = require('random-color-selector');
const getRandomReligion = require('random-religion-selector');
const getRandomJob = require('random-job-selector');
const getRandomHobby = require('random-hobby-selector');
const guessSmartphone = require('guess-smartphone');
const guessIQ = require('guess-iq');
const guessIdeology = require('guess-ideology');

function guessZodiac() {
    const food = getRandomFood();
    const drink = getRandomDrink();
    const color = getRandomColor();
    const religion = getRandomReligion();
    const job = getRandomJob();
    const hobby = getRandomHobby();
    const smartphone = guessSmartphone();
    const iq = guessIQ();
    const ideology = guessIdeology();
    console.log(`Your random food is: ${food.name}`);
    console.log(`Your random drink is: ${drink.name}`);
    console.log(`Your random color is: ${color}`);
    console.log(`Your random religion is: ${religion}`);
    console.log(`Your random job is: ${job}`);
    console.log(`Your random hobby is: ${hobby}`);
    console.log(`Your guessed smartphone is: ${smartphone}`);
    console.log(`Your guessed IQ is: ${iq}`);
    console.log(`Your guessed ideology is: ${ideology}`);
    // You can replace this with your own logic to guess a zodiac sign
    const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    const guessedZodiac = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
    console.log(`The guessed zodiac sign based on the data is: ${guessedZodiac}`);
}

module.exports = guessZodiac;
