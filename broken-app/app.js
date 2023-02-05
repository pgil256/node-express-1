const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());


app.post('/', async function(req, res, next) {
  try {
    let developers = req.body.developers
    results = developers.map(async developer => { 
      await axios.get(`https://api.github.com/users/${developer}`);
    });
    let out = results.map(results => ({ name: results.data.name, bio: results.data.bio }));

    return res.send(JSON.stringify(out));
  } catch {
    next(err);
  }
});

app.listen(3000, () => {
  console.log('Initializing app on port 3000');
});
