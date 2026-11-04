const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/notice', (req, res) => {
    res.json({
        code: 200,
        status: "online",
        announcement: "Welcome sa Sarili Kong Server!"
    });
});

app.post('/api/login', (req, res) => {
    console.log("May nag-login:", req.body);
    res.json({
        code: 200,
        token: "fake-token-123",
        msg: "Login Success"
    });
});

app.listen(3000, '0.0.0.0', () => {
    console.log("Buhay na ang server sa port 3000!");
});

