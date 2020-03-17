const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const listingSchema = require('./models/listing.model');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser());
app.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri, {useNewParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    useNewUrlParser: true,
    console.log('mongodb database connection established successfully'); 
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})



app.get('/get-listings', (req,res) => {
    listingSchema.find(
        {},
        (err, listing) => {
            if (err) return res.render({err:err});
            res.send(listing)
        }
    )
});
