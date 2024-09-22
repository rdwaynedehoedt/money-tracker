const express = require ('express');
const app = express();
const cors = require('cors');

app.use(cors( ));

app.get('/ap i/test', (req,res) => {
    res.json('test ok12');
});

app.post('/api/transaction', (req, res ) => {
     res.json('req.body');
});

app.listen(4000);