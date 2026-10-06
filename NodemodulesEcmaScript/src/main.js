//import { key } from './utils/api.mjs';
//import connectToDataBase from './utils/dataBase.mjs';
//import {dataBaseType, connectToDataBase,disconnectFromDataBase} from './utils/dataBase.mjs';

import * as dataBase from './utils/dataBase.mjs';
import * as api from './utils/api.js';
import * as test from './utils/test.cjs';

async function main() {
    console.log(dataBase.dataBaseType.userType);
    console.log(api.key.value);
    api.getDataApi();
    await dataBase.connectToDataBase('myDatabase');
    await dataBase.disconnectFromDataBase();
    await test.commonModule();
}

main();