const { readdirSync } = require('fs');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;


readdirSync('./routes').map(file => app.use('/api/v1', require(`./routes/${file}`)));

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(port, () => {
      console.log(`server listening on ${port}`);
    })
  })
  .catch((err) => console.log(err));


