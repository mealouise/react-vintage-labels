const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const listingSchema = require('./models/listing.model');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use
