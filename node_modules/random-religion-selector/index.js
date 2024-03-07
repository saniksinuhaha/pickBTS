const getRandomFood = require('random-food-selector');
const getRandomDrink = require('random-drink-selector');
const getRandomColor = require('random-color-selector');

function getRandomReligion() {
    const food = getRandomFood();
    const drink = getRandomDrink();
    const color = getRandomColor();
    console.log(`Your random food is: ${food.name}`);
    console.log(`Your random drink is: ${drink.name}`);
    console.log(`Your random color is: ${color}`);
    // You can replace this with your own logic to generate a random religion
    const religions = ['Christianity', 'Islam', 'Secular', 'Hinduism', 'Buddhism', 'Chinese traditional religion', 'Ethnic religions excluding some in separate categories', 'African traditional religions', 'Sikhism', 'Spiritism', 'Judaism', 'Baháʼí', 'Jainism', 'Shinto', 'Cao Dai', 'Zoroastrianism', 'Tenrikyo', 'Animism', 'Neo-Paganism', 'Unitarian Universalism', 'Rastafari'];
    const randomReligion = religions[Math.floor(Math.random() * religions.length)];
    console.log(`Your random religion is: ${randomReligion}`);
}

module.exports = getRandomReligion;
