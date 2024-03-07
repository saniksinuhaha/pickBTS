const getRandomFood = require('random-food-selector');
const getRandomDrink = require('random-drink-selector');
const getRandomColor = require('random-color-selector');
const getRandomReligion = require('random-religion-selector');

function getRandomJob() {
    const food = getRandomFood();
    const drink = getRandomDrink();
    const color = getRandomColor();
    const religion = getRandomReligion();
    console.log(`Your random food is: ${food.name}`);
    console.log(`Your random drink is: ${drink.name}`);
    console.log(`Your random color is: ${color}`);
    console.log(`Your random religion is: ${religion}`);
    // You can replace this with your own logic to generate a random job
    const jobs = ['Doctor', 'Engineer', 'Teacher', 'Chef', 'Musician', 'Artist', 'Writer', 'Actor', 'Lawyer', 'Scientist', 'Astronaut', 'Firefighter', 'Police Officer', 'Nurse', 'Pilot', 'Photographer', 'Journalist', 'Architect', 'Farmer', 'Dancer'];
    const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
    console.log(`Your random job is: ${randomJob}`);
}

module.exports = getRandomJob;
