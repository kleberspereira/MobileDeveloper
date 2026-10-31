import chalk from 'chalk';

const qrCodePromptSchema = [
    {
        name: 'link',
        description: chalk.yellow.bold('Enter the URL link to generate QR code for'),
        type: 'string',
        pattern: /https?:\/\/(www.)?[a-zA-Z]+(\.[a-zA-Z]+)+(\/(\w|[-_%.#?=&+])+)+/g,
        message: chalk.red.italic('Invalid link format'),
        required: true
    },
    {
        name: 'type',
        description: chalk.yellow.bold('Select (1) to generate QR code as image or (2) to generate as a terminal text QR code'),
        type: 'string',
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Invalid selection'),
        required: true
    }
];

export default qrCodePromptSchema;