import chalk from 'chalk';
import handlePasswordGeneration from './handle.js';

async function createPassword() {
  console.log(chalk.green.bold('Generating password...'));
  const password = await handlePasswordGeneration();
  console.log(chalk.green.bold('Generated password:'), password);
};

export default createPassword;