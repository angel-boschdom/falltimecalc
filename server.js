const express = require('express');
const app = express();
app.use(express.json());

app.post('/calculate', (req, res) => {
    var altitude = req.body.altitude;
    var time = Math.sqrt(2 * altitude / 9.81);
    res.json({ time: time });
});

app.listen(3000, () => console.log('Server running on port 3000'));