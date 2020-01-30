const express = require("express");
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..','client', 'src', 'main.js'));
});

app.listen(port, () => console.log(`Server started on port ${port}`));

// Routes
app.use('/routes/api/discord', require('./routes/api/discord'));

// Error Catcher
app.use((err, req, res, next) => {
    switch (err.message) {
      case 'NoCodeProvided':
        return res.status(400).send({
          status: 'ERROR',
          error: err.message,
        });
      default:
        return res.status(500).send({
          status: 'ERROR',
          error: err.message,
        });
    }
});