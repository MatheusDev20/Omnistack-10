const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const PORT = 3333;
app.use(cors());

app.use(express.json());

app.use(routes);
mongoose.connect('mongodb+srv://Matheus:b4TF4U6MumunDUdE@cluster0-uycjp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology:true
}).then(()=> {
    console.log("Database Connection Successed")
})

app.listen(PORT);
