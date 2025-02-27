const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));
app.use(cookieParser());

// Connetti a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connesso'))
    .catch(err => console.log(err));

// Rotta di test
app.get('/', (req, res) => {
    res.send('HelpHub Backend Online!');
});

// Avvio server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server avviato sulla porta ${PORT}`));
