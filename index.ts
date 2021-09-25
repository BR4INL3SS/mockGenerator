import { execSync } from "child_process";
import { argv, exit } from "process";
import { User } from './types/index'
import fs from 'fs';

if (argv.length < 4) {
    console.log("\x1b[31m%s\x1b[0m",'Process failed: Not enough arguments')
    exit(-1);
}
const sampleSize: number = parseInt(argv[2]);
const result: Array<User> = [];
if(!Number.isInteger(sampleSize)){
    console.log("\x1b[31m%s\x1b[0m",'Process failed: The sample size should be a number')
    exit(-1);
}

console.clear();
console.log('Progress:', 0, '%')
for (let index = 0; index < sampleSize; index++) {
    try {
        const res = execSync(`node ./node_modules/intermock/build/src/cli/index.js --files ./types/index.ts -i "${argv[3]}" -o string`).toString();
        if(res === '{};\n'){
            console.log("\x1b[31m%s\x1b[0m",`Process failed: Interface ${argv[3]} undefined`)
            exit(-1);
        }
        result.push(JSON.parse(res.replace(';', ''))[argv[3]])
        console.clear();
        console.log('Progress:', Math.floor(((index+1)/parseInt(argv[2]))*100), '%')
    } catch (error) {
        console.log(error.message);
        exit(-1)
    }
}
console.clear();
console.log('Done... Check ./mock/mock.json')
fs.writeFileSync('./mock/mock.json', JSON.stringify(result))