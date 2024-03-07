const getRandomFood = require('random-food-selector');
const getRandomDrink = require('random-drink-selector');
const getRandomColor = require('random-color-selector');
const getRandomReligion = require('random-religion-selector');
const getRandomJob = require('random-job-selector');
const getRandomHobby = require('random-hobby-selector');
const guessSmartphone = require('guess-smartphone');
const guessIQ = require('guess-iq');

function guessIdeology() {
    const food = getRandomFood();
    const drink = getRandomDrink();
    const color = getRandomColor();
    const religion = getRandomReligion();
    const job = getRandomJob();
    const hobby = getRandomHobby();
    const smartphone = guessSmartphone();
    const iq = guessIQ();
    console.log(`Your random food is: ${food.name}`);
    console.log(`Your random drink is: ${drink.name}`);
    console.log(`Your random color is: ${color}`);
    console.log(`Your random religion is: ${religion}`);
    console.log(`Your random job is: ${job}`);
    console.log(`Your random hobby is: ${hobby}`);
    console.log(`Your guessed smartphone is: ${smartphone}`);
    console.log(`Your guessed IQ is: ${iq}`);
    // You can replace this with your own logic to guess an ideology
    const ideologies = ['Liberalism', 'Conservatism', 'Socialism', 'Communism', 'Fascism', 'Anarchism', 'Capitalism', 'Environmentalism', 'Feminism', 'Nationalism', 'Pacifism', 'Secularism', 'Libertarianism', 'Populism', 'Progressivism', 'Totalitarianism', 'Centrism'];
    const guessedIdeology = ideologies[Math.floor(Math.random() * ideologies.length)];
    console.log(`The guessed ideology based on the data is: ${guessedIdeology}`);
}

module.exports = guessIdeology;
