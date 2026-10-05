const p  = require('./services/products');
const {getFullName}  = require('./services/products');
const config = require('./services/config');
const data = require('./services/database');

async function main() {
    console.log("Hello, World!");
    p.getFullName(408, "iPhone 15 Pro Max");
    p.productLabel("iPhone 14");
    console.log(`version: ${config.devArea.version} -- production: ${config.devArea.production}`);
    await data.connectToDataBase("MongoDB");
    data.disconnectToDataBase();
    getFullName(410, "iPhone 18 Pro Max");
};

main();
