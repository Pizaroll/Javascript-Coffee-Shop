//import express from 'express' (this is old ES5 and we do not need to import)
const express = require('express')
const cors = require('cors')

//Middleware
const app = express()
app.use(cors())
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//menu
const menu = [
    {
        name: 'Americano',
        price: 2.5,
        type: 'hot',
    },
    {name: 'Latte', price: 3.0, type: 'hot'},
    {name: 'Cappuccino', price: 3.5, type: 'hot'},
    {name: 'Frozen Americano', price: 4.5, type: 'cold'},
    {name: 'Frozen Latte', price: 2.5, type: 'cold'},
    {name: 'Pup Cup', price: 0, type: 'cold'},
];

const orderArray = [];

app.post('/checkout', (req, res) => {
    console.log('gn2 /checkout', req.body)

    if(!req.body || req.body.length < 1){
        res.status(400).json({ message: "At least one item required for order" });
    }

    const order = req.body;
    console.log('order', order)

    //put order in orderArray
    orderArray.push(order);
    console.log('orderArray', orderArray)

    const confirmationNumber = '123456';

    res.status(200).json({message: "Order Process Successfully", confirmationNumber: confirmationNumber})
})

// User data
const user = { username: 'admin', password: 'password123'};

app.get('/', (req, res) => {
    console.log('hitting / route')
  res.send('Hello World')
})

app.get('/getMenu', (req, res) => {
    console.log('gn2 /getMenu')
    //reach out to database to get menu
    //currently we have an array (db stuff next week)
    res.json(menu)
})

app.post('/login', (req, res) => {
    console.log('gn2 /login', req.body)
    //check user login
    const {username, password} = req.body;

    if(username != user.username || password != user.password){
        res.status(401).json({message: "Not Authorized"});
    }
    res.status(200).json({message:'Successful', menu: menu})
})

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})