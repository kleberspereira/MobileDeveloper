//Export defautl

exports.connectToDataBase = async (Name) => {
    console.log(`Database connected: ${Name}`);
};

exports.disconnectToDataBase = () => {
    console.log(`Database disconnected.`);
};
