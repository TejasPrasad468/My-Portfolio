require('dotenv').config();
const express = require('express');
const app = express();
const port = 2000;
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const countryRoutes = require('./routes/countryRoutes');
const stateRoutes = require('./routes/stateRoutes');

const PORT = process.env.PORT || 2000;

// Middleware to parse form data
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: 'https://tejasprasad.netlify.app'
}));

app.get('/', (req, res) => {
  res.send("Hey! Wanna Talk?? Click 👉👉 https://tejasprasad.netlify.app/")
});

app.use('/users', userRoutes);
app.use('/countries', countryRoutes);
app.use('/states', stateRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
