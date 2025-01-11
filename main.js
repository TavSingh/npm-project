import lodash from "lodash";
import chalk from "chalk";
import { faker } from "@faker-js/faker"
import validator from "validator";
import colors from "colors";

const array = [1, 3, 4, 5, 1, 2, 2, 3, 33, 5, 6]
const unique = lodash.uniq(array);
console.log(chalk.gray(unique));

console.log(chalk.blueBright("Hello, with chalk"));

console.log(
    faker.helpers.fake(
        'Hello {{person.prefix}} {{person.lastName}}, how are you today?'
    )
);

const input = "example";
const confirmInput = "example"; 
console.log(validator.equals(input, confirmInput));

console.log("I like food".underline.red);