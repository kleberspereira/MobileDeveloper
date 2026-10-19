import { connectToDataBase } from "./database/data.js";

async function main() {
    await connectToDataBase("bla", "blabla");
    await connectToDataBase(process.env.USERDATABASE, process.env.USERPASSWORD);
    console.log("\n");
}

main()