// app.js (or server.js)

const express = require('express');
const app = express();

const homeRouter = require('./routes/home');

// Mount the homeRouter to handle routes under /api
app.use('/api', homeRouter);

// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
