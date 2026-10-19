async function connectToDataBase(user, password) {
    if(user === process.env.USERDATABASE && password === process.env.USERPASSWORD) {
        console.log("\nConnected to database.");
    } else {
        console.log("\nInvalid credentials.");
    }
}

export { connectToDataBase };