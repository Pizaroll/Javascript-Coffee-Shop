//import express from 'express' (this is old ES5 and we do not need to import)
const express = require('express')
const cors = require('cors')

//Middleware
const app = express()
app.use(cors())

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

app.listen(3000)