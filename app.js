const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());

app.post('/', async function(req, res, next) {
      try {
        let developerInfo = req.body.developers.map(developer => 
        axios.get(`https://api.github.com/users/${developer}`)
        );
        let results = await Promise.all(developerInfo);
        
        let out = results.map(r =>({
          bio: r.data.bio,
          name: r.data.name,
        }));

        return res.json(out)
      } catch (err){
        return next(err);
      }
});

app.listen(3000);

