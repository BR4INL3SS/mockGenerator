import { execSync } from "child_process";
import { argv, exit } from "process";
import { User } from './types/index'
import fs from 'fs';

const sampleSize: number = parseInt(argv[2]);
const result: Array<User> = [];
if(!sampleSize) exit(-1);

console.clear();
console.log('Progress:', 0, '%')
for (let index = 0; index < sampleSize; index++) {
    try {
        const res = execSync(`node ./node_modules/intermock/build/src/cli/index.js --files ./types/index.ts --interfaces "${argv[3]}" -o string`).toString();
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