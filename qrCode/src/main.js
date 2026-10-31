import prompt from 'prompt';
import mainPromptSchema from './schemas/prompts/main.js';
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main(){
    prompt.get(mainPromptSchema, async (err, choose) => {
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassword();
    });

    prompt.start();
};

main();