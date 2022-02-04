const express = require("express");
const helmet = require('helmet');
const data = require('./user.json');
require('dotenv').config();

const cors = require('cors');
const res = require("express/lib/response");
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("the listing port is..." + port);
}
);
app.post('/', (req, res) => {  //post api
    const result = req.body;
    res.send(result).status(201);
})
app.get('/api/user', (req, res) => { //get api
    console.log(data);
    res.send(data);
})
app.get('/api/user/:id', (req, res) => {
    const user = data.find(c => c.id === parseInt(req.params.id));
    if (!user) {
        res.send('id is not avalible').status(404);
    }
    else {
        console.log(user);
        res.send(user).status(200);
    }
})
app.put('/api/user/:id', (req, res) => { //put api
    const user = data.find(c => c.id === parseInt(req.params.id));
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;
    user.place = req.body.place;
    if (!user) {
        res.send('id is not availble').status(404);
    }
    else {
        console.log(user);
        res.send(user).status(200);

    }
})

app.delete('/api/user/:id', (req, res) => {  //delete api
    const user = data.find(c => c.id === parseInt(req.params.id));
    if (!user) {
        res.send('id not available').status(404);
    }
    else {
        console.log(user);
        res.send('successfully delete the data').status(200);
    }

})