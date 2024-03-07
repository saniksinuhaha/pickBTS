const guessSmartphone = require('guess-smartphone');
const guessIQ = require('guess-iq');
const guessIdeology = require('guess-ideology');
const guessZodiac = require('guess-zodiac');
const guessPets = require('guess-pets');
const luckyRate = require('lucky-rate');

function healthRate() {
    const smartphone = guessSmartphone();
    const iq = guessIQ();
    const ideology = guessIdeology();
    const zodiac = guessZodiac();
    const pets = guessPets();
    const luck = luckyRate();
    console.log(`Your guessed smartphone is: ${smartphone}`);
    console.log(`Your guessed IQ is: ${iq}`);
    console.log(`Your guessed ideology is: ${ideology}`);
    console.log(`Your guessed zodiac sign is: ${zodiac}`);
    console.log(`Your guessed pet is: ${pets}`);
    console.log(`Your lucky rate is: ${luck}`);
    // You can replace this with your own logic to calculate a health rate
    const healthRate = Math.floor(Math.random() * 101);
    console.log(`Your health rate based on the data is: ${healthRate}%`);
}

module.exports = healthRate;
