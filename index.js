
const express = require('express');
require('dotenv').config();
const {serverRouter} = require('./routers/server.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(serverRouter);


app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

console.log(PORT)