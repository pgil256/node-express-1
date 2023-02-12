
const fs = require('fs');
const axios = require('axios');

async function readURL(path) {
    fs.readFile(path, 'utf-8', async (err,data) => {
        if (err) {
            console.error(`Error reading URL: ${path}`, err);
            process.exit(1);
        }
        return separateUrls(data)
    });
}

function separateUrls(data){
    let urls = data.split('\n').filter(u => u !== (''));
    for(url of urls){
        getHTML(url)
    }
}

async function getHTML(url) {
    let resp;
    try {
       resp = await axios.get(url);
    }
    catch  {
        console.error(`Couldn't Download ${url}`);
    }
    let fileName = new URL(url).hostname;
    
    fs.writeFile(fileName, resp.data, 'utf8', function(err) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`File created for ${fileName}`);
        }); 
}

let path = process.argv[2];
readURL(path);
