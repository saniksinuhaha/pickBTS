const axios = require('axios');
const _ = require('lodash');
const chalk = require('chalk');

async function getRandomFood() {
    // You can replace this URL with the API you're using to get food data
    const response = await axios.get('https://api.example.com/foods');
    const foods = response.data;
    const randomFood = _.sample(foods);
    console.log(chalk.green(`Your random food is: ${randomFood}`));
}

module.exports = getRandomFood;
