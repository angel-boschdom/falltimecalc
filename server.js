const express = require('express');
const app = express();

// Use the PORT environment variable if it's set, otherwise default to 3000
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// Middleware to log the request details
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next();
});

app.post('/calculate', (req, res) => {
    const altitude = req.body.altitude;
    console.log(`Calculating falling time for altitude: ${altitude} meters`);

    const gravity = 9.81; // Earth's gravity in m/s^2
    const time = Math.sqrt((2 * altitude) / gravity); // Time = sqrt(2 * altitude / gravity)

    // Log the result before sending the response
    console.log(`Time to fall: ${time.toFixed(2)} seconds`);

    res.json({ time: time });
});

// Start the server on the correct port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});