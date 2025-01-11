import lodash from "lodash";
import chalk from "chalk";

const array = [1, 3, 4, 5, 1, 2, 2, 3, 33, 5, 6]
const unique = lodash.uniq(array);
console.log(chalk.bgGray(unique));

console.log(chalk.blueBright("Hello, with chalk"));