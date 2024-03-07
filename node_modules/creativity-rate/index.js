const guessSmartphone = require('guess-smartphone');
const guessIQ = require('guess-iq');
const guessIdeology = require('guess-ideology');
const guessZodiac = require('guess-zodiac');
const guessPets = require('guess-pets');
const luckyRate = require('lucky-rate');
const healthRate = require('health-rate');

function creativityRate() {
    const smartphone = guessSmartphone();
    const iq = guessIQ();
    const ideology = guessIdeology();
    const zodiac = guessZodiac();
    const pets = guessPets();
    const luck = luckyRate();
    const health = healthRate();
    console.log(`Your guessed smartphone is: ${smartphone}`);
    console.log(`Your guessed IQ is: ${iq}`);
    console.log(`Your guessed ideology is: ${ideology}`);
    console.log(`Your guessed zodiac sign is: ${zodiac}`);
    console.log(`Your guessed pet is: ${pets}`);
    console.log(`Your lucky rate is: ${luck}`);
    console.log(`Your health rate is: ${health}`);
    // You can replace this with your own logic to calculate a creativity rate
    const creativityLevels = ['Novice (Level 1)', 'Apprentice (Level 2)', 'Journeyman (Level 3)', 'Master (Level 4)', 'Visionary (Level 5)'];
    const creativityRate = creativityLevels[Math.floor(Math.random() * creativityLevels.length)];
    console.log(`Your creativity rate based on the data is: ${creativityRate}`);
}

module.exports = creativityRate;
