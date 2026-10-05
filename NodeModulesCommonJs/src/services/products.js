async function doBreak() {
    console.log("\n");
};

async function getFullName(codId, productName){
    await doBreak();
    console.log(`product: ${codId} -- ${productName}`);
};

async function productLabel(productName){
    console.log(`product label: ${productName}`);
};

module.exports = {
    getFullName,
    productLabel
};
