const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('给每行前后加内容.txt'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    console.log(`'${line}',`);
});
