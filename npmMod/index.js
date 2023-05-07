import chalk from "chalk";
import validator from "validator";

console.log(chalk.blue("Hello world!"));
console.log(chalk.blue("Hello") + " World here" + chalk.red("!"));
console.log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

const res1 = validator.isEmail("asdfgh@.gmail.com");
console.log(res1 ? chalk.green.inverse(re1) : chalk.red.inverse(res1));

const res2 = validator.isEmail("asdfgh@gmail.com");
console.log(res2 ? chalk.green.inverse(res2) : chalk.red.inverse(res2));
