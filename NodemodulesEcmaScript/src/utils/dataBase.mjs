const dataBaseType = {
    userType: "admin",
    typeData: "local"
}

async function connectToDataBase(dataName) {
    console.log(`Connecting to database: ${dataName}`);
}

async function disconnectFromDataBase() {
    console.log("Disconnecting from database");
}

export { dataBaseType, connectToDataBase, disconnectFromDataBase };