const express = require('express');

// Initializing the server
const app = express();

// Initialising body parser middleware
app.use(express.json({ extended: false }));

app.get('/', (req,res) => res.send((`API running on ${PORT}`)))

// Routes
app.use('/api/email', require('./routes/api/email'))


// Defining Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))