const guessSmartphone = require('guess-smartphone');
const guessIQ = require('guess-iq');
const guessIdeology = require('guess-ideology');
const guessZodiac = require('guess-zodiac');
const guessPets = require('guess-pets');

function luckyRate() {
    const smartphone = guessSmartphone();
    const iq = guessIQ();
    const ideology = guessIdeology();
    const zodiac = guessZodiac();
    const pets = guessPets();
    console.log(`Your guessed smartphone is: ${smartphone}`);
    console.log(`Your guessed IQ is: ${iq}`);
    console.log(`Your guessed ideology is: ${ideology}`);
    console.log(`Your guessed zodiac sign is: ${zodiac}`);
    console.log(`Your guessed pet is: ${pets}`);
    // You can replace this with your own logic to calculate a lucky rate
    const luckyRate = Math.floor(Math.random() * 101);
    console.log(`Your lucky rate based on the data is: ${luckyRate}%`);
}

module.exports = luckyRate;
