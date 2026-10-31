async function permitedCharacters() {
    let permited = [];
    if(process.env.UPPERCASE_LETTERS === 'true') permited.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if(process.env.LOWERCASE_LETTERS === 'true') permited.push(..."abcdefghijklmnopqrstuvwxyz");
    if(process.env.SPECIAL_CHARACTERS === 'true') permited.push(...".<>?!@#$%^&*()-+=,_~[]{}|;:,`");
    if(process.env.NUMBERS === 'true') permited.push(..."1234567890");
    return permited;
}

export default permitedCharacters;