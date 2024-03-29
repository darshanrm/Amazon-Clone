const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HsqzjEaOmWUtjRkURbfYPziyDsM2C2BJxo9mAhngn2vRYCAyprsLPtEt7qHiU8RPb7vcfzrhfL5WoIqMHFyQfBF007DNgejat"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors());
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received! for the amount >>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    description: "international payment",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);
