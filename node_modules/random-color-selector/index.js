const getRandomFood = require('random-food-selector');
const getRandomDrink = require('random-drink-selector');

function getRandomColor() {
    const food = getRandomFood();
    const drink = getRandomDrink();
    console.log(`Your random food is: ${food.name}`);
    console.log(`Your random drink is: ${drink.name}`);
    // You can replace this with your own logic to generate a random color
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    console.log(`Your random color is: ${color}`);
}

module.exports = getRandomColor;
