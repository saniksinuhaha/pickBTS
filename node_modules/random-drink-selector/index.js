const getRandomFood = require('random-food-selector');

function getRandomDrink() {
    const food = getRandomFood();
    if (food.type === 'drink') {
        console.log(`Your random drink is: ${food.name}`);
    } else {
        console.log('The random food is not a drink. Try again!');
    }
}

module.exports = getRandomDrink;
