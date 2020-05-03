import * as fs from 'fs';

var dir = './tmp';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}