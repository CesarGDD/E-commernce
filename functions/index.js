const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('');


//API

//App config
const app = express();

//Middelwares
app.use(cors({origin: true}));
app.use(express.json());

//API Routes
app.get('/', (req, res) => res.status(200).send(' hello mate'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('----------------------------',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'aud'
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

//Listen Comand

exports.api = functions.https.onRequest(app);

//http://localhost:5001/base-b40b1/us-central1/api