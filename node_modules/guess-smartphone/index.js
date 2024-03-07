const getRandomFood = require('random-food-selector');
const getRandomDrink = require('random-drink-selector');
const getRandomColor = require('random-color-selector');
const getRandomReligion = require('random-religion-selector');
const getRandomJob = require('random-job-selector');
const getRandomHobby = require('random-hobby-selector');

function guessSmartphone() {
    const food = getRandomFood();
    const drink = getRandomDrink();
    const color = getRandomColor();
    const religion = getRandomReligion();
    const job = getRandomJob();
    const hobby = getRandomHobby();
    console.log(`Your random food is: ${food.name}`);
    console.log(`Your random drink is: ${drink.name}`);
    console.log(`Your random color is: ${color}`);
    console.log(`Your random religion is: ${religion}`);
    console.log(`Your random job is: ${job}`);
    console.log(`Your random hobby is: ${hobby}`);
    // You can replace this with your own logic to guess a smartphone
    const smartphones = ['iPhone 13', 'Samsung Galaxy S21', 'Google Pixel 6', 'OnePlus 9', 'Huawei P50 Pro', 'Xiaomi Mi 11', 'Sony Xperia 1 III', 'Oppo Find X3 Pro', 'Motorola Edge 20 Pro', 'Nokia 9 PureView'];
    const guessedSmartphone = smartphones[Math.floor(Math.random() * smartphones.length)];
    console.log(`The guessed smartphone based on the data is: ${guessedSmartphone}`);
}

module.exports = guessSmartphone;
