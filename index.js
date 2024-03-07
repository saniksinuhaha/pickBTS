const guessSmartphone = require('guess-smartphone');
const guessIQ = require('guess-iq');
const guessIdeology = require('guess-ideology');
const guessZodiac = require('guess-zodiac');
const guessPets = require('guess-pets');
const luckyRate = require('lucky-rate');
const healthRate = require('health-rate');
const creativityRate = require('creativity-rate');
const innovationRate = require('innovation-rate');
const resilienceRate = require('resilience-rate');

function pickBtsMember() {
    const smartphone = guessSmartphone();
    const iq = guessIQ();
    const ideology = guessIdeology();
    const zodiac = guessZodiac();
    const pets = guessPets();
    const luck = luckyRate();
    const health = healthRate();
    const creativity = creativityRate();
    const innovation = innovationRate();
    const resilience = resilienceRate();

    console.log(`Your guessed smartphone is: ${smartphone}`);
    console.log(`Your guessed IQ is: ${iq}`);
    console.log(`Your guessed ideology is: ${ideology}`);
    console.log(`Your guessed zodiac sign is: ${zodiac}`);
    console.log(`Your guessed pet is: ${pets}`);
    console.log(`Your lucky rate is: ${luck}`);
    console.log(`Your health rate is: ${health}`);
    console.log(`Your creativity rate is: ${creativity}`);
    console.log(`Your innovation rate is: ${innovation}`);
    console.log(`Your resilience rate is: ${resilience}`);

    // You can replace this with your own logic to pick a BTS member
    const btsMembers = ['RM', 'Jin', 'Suga', 'J-Hope', 'Jimin', 'V', 'Jungkook'];
    const pickedMember = btsMembers[Math.floor(Math.random() * btsMembers.length)];
    console.log(`Your picked BTS member based on the data is: ${pickedMember}`);
}

module.exports = pickBtsMember;
