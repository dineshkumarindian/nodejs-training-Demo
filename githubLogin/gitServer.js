const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');


const app=express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
app.listen(port,() =>{
    console.log('the listening on port ...'+port);
})

const clientId = 'e398a6b6d32c86a70a31';
const clientSecert = '743439bbf96584ee96858efc6c490f4b8094f7ef';

app