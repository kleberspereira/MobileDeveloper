import chalk from 'chalk';

const mainPromptSchema = [
    {
        name: 'select',
        description: chalk.yellow.bold('Select (1) to generate QR code or (2) to generate a Password'),
        type: 'string',
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Select (1) to QR code or (2) to Password'),
        required: true
    }
];

export default mainPromptSchema;