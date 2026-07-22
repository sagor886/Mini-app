const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.error('MongoDB Connection Error:', err));

app.get('/', (req, res) => {
  res.send('Server is running perfectly!');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});