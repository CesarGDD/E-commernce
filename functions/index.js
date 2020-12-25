const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HgqIpIal7iahGw3VVINzY7lgbzb5Trq2fUqsbe1suSdW1jHQj5AVX8ye6ERGwu0llImKtPT0qh6NK2eQdPPAhrm00ta94qM5u');


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