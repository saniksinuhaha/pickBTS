const getRandomFood = require('random-food-selector');
const getRandomDrink = require('random-drink-selector');
const getRandomColor = require('random-color-selector');
const getRandomReligion = require('random-religion-selector');
const getRandomJob = require('random-job-selector');
const getRandomHobby = require('random-hobby-selector');
const guessSmartphone = require('guess-smartphone');
const guessIQ = require('guess-iq');
const guessIdeology = require('guess-ideology');
const guessZodiac = require('guess-zodiac');

function guessPets() {
    const food = getRandomFood();
    const drink = getRandomDrink();
    const color = getRandomColor();
    const religion = getRandomReligion();
    const job = getRandomJob();
    const hobby = getRandomHobby();
    const smartphone = guessSmartphone();
    const iq = guessIQ();
    const ideology = guessIdeology();
    const zodiac = guessZodiac();
    console.log(`Your random food is: ${food.name}`);
    console.log(`Your random drink is: ${drink.name}`);
    console.log(`Your random color is: ${color}`);
    console.log(`Your random religion is: ${religion}`);
    console.log(`Your random job is: ${job}`);
    console.log(`Your random hobby is: ${hobby}`);
    console.log(`Your guessed smartphone is: ${smartphone}`);
    console.log(`Your guessed IQ is: ${iq}`);
    console.log(`Your guessed ideology is: ${ideology}`);
    console.log(`Your guessed zodiac sign is: ${zodiac}`);
    // You can replace this with your own logic to guess a pet
    const pets = ['Dog', 'Cat', 'Fish', 'Bird', 'Hamster', 'Rabbit', 'Turtle', 'Snake', 'Ferret', 'Horse', 'Guinea Pig', 'Tarantula', 'Hermit Crab', 'Gerbil', 'Chinchilla', 'Rat', 'Hedgehog', 'Iguana', 'Lizard', 'Frog'];
    const guessedPet = pets[Math.floor(Math.random() * pets.length)];
    console.log(`The guessed pet based on the data is: ${guessedPet}`);
}

module.exports = guessPets;
