const PORT = process.env.PORT || 5060;

const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});


app.listen(PORT, () => console.log(`Server running on port ${PORT} || 5060`));
