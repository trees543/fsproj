const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const findMedian = require('./find-median.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const { n } = req.body;
  const result = findMedian(n);
  res.json({ payload: result, err: null });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
