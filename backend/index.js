const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); 
app.use(express.json());

const connectDB = require('./db');

(async () => {
  try {
    const { data, Catdata } = await connectDB();
    global.foodData = data;
    global.foodCategory = Catdata;

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.use('/api/auth', require('./routes/Auth'));

    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error initializing the server:', error.message);
  }
})();
