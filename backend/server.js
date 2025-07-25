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
  res.send(`
    <html>
      <head><title>Let's Connect</title></head>
      <body style="font-family: Arial, sans-serif;">
        <h2>Hey! Wanna Talk??</h2>
        <p>
          Click 👉👉 
          <a href="https://tejasprasad.netlify.app/" target="_blank" rel="noopener noreferrer">
            https://tejasprasad.netlify.app/
          </a>
        </p>
      </body>
    </html>
  `);
});

app.use('/users', userRoutes);
app.use('/countries', countryRoutes);
app.use('/states', stateRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
