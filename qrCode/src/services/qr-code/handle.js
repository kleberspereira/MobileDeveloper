 import qr from 'qrcode-terminal';
 import chalk from 'chalk';

 async function handleQRCodeGeneration(err, choose) {
        if(err) {
            console.error(chalk.red.italic('Error occurred while generating QR code'));
            return;
        }

        const isSmall = choose.type == 2;

        qr.generate(choose.link, { small: isSmall }, (qrcode) => {
            console.log(chalk.green.bold('QR code generated successfully!\n'));
            console.log(qrcode);
        });
 }

 export default handleQRCodeGeneration;