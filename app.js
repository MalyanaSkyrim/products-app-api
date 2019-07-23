const express = require('express');

const app = express();

app.use(function(req, res, next) {
  res.set({
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, auth-token"
  });

  next();
});

const productsRoute = require('./routes/productsList');

app.use('/api',productsRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));