import permitedCharacters from './utils/permitedCharacters.js';

async function handlePasswordGeneration() {
    let password = "";
    let passwordLength = parseInt(process.env.PASSWORD_LENGTH);
    let charaters = await permitedCharacters();

    for(let i = 0; i < passwordLength; i++) {
        password += charaters[Math.floor(Math.random() * charaters.length)];
    }

    return password;
}

export default handlePasswordGeneration;