import chalk from 'chalk';
import logSymbols from 'log-symbols';

console.log(chalk.greenBright.bgRedBright.bold('Hello, World npmPackages! npm -i'));
console.log(logSymbols.success, chalk.greenBright('Success!'));
console.log(logSymbols.error, chalk.redBright('Error!'));
console.log(logSymbols.warning, chalk.yellowBright('Warning!'));
console.log(logSymbols.info, chalk.blueBright('Info!'));