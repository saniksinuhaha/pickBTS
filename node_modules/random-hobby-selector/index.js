const getRandomFood = require('random-food-selector');
const getRandomDrink = require('random-drink-selector');
const getRandomColor = require('random-color-selector');
const getRandomReligion = require('random-religion-selector');
const getRandomJob = require('random-job-selector');

function getRandomHobby() {
    const food = getRandomFood();
    const drink = getRandomDrink();
    const color = getRandomColor();
    const religion = getRandomReligion();
    const job = getRandomJob();
    console.log(`Your random food is: ${food.name}`);
    console.log(`Your random drink is: ${drink.name}`);
    console.log(`Your random color is: ${color}`);
    console.log(`Your random religion is: ${religion}`);
    console.log(`Your random job is: ${job}`);
    // You can replace this with your own logic to generate a random hobby
    const hobbies = ['Reading', 'Writing', 'Cooking', 'Gardening', 'Painting', 'Photography', 'Traveling', 'Hiking', 'Dancing', 'Singing', 'Playing musical instruments', 'Yoga', 'Meditation', 'Running', 'Swimming', 'Cycling', 'Fishing', 'Bird watching', 'Star gazing', 'Collecting stamps', 'Collecting coins', 'Collecting antiques', 'Knitting', 'Sewing', 'Pottery', 'Woodworking', 'Jewelry making', 'Origami', 'Calligraphy', 'Blogging', 'Podcasting', 'Video gaming', 'Board gaming', 'Watching movies', 'Watching TV series', 'Watching sports', 'Learning languages', 'Learning new skills', 'Volunteering', 'Charity work'];
    const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
    console.log(`Your random hobby is: ${randomHobby}`);
}

module.exports = getRandomHobby;
