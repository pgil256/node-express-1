const fs = require('fs');
const axios = require('axios');

async function readURL(path) {
    fs.readFile(path, 'utf-8', async (err,data) => {
        if (err) {
            console.error(`Error reading URL: ${path}`, err);
            process.exit(1);
        }
    
        else {
            for (url of data.split('\n')) {
                try {
                    const res = await axios.get(url);
                    console.log(`Wrote to ${res}`);
                    return res;
                }
                catch(err) {
                    console.error(`Couldn't download: ${res}`);
                }
                makeFile(res);
            }
        }
    });
}


async function makeFile(res) {
    let noHTTP = res.map(res => res.split("//")[1]);
    let hostName = noHTTP.map(noHTTP => noHTTP.split("/")[0]);
    fs.writeFile(`${hostName}.txt`, res.value.data, (err) => {
        if (err) {
            console.error(err);
        }
        console.log(`File created for ${hostName}`);
    });
}

let path = process.argv[2];
readURL(path);