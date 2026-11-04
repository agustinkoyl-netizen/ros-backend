const express = require('express');
const app = express();

app.use(express.json());

const accounts = [
  { username: 'admin', password: '123' },
  { username: 'player1', password: 'abc' },
  { username: 'testuser', password: 'password123' }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const foundUser = accounts.find(
    acc => acc.username === username && acc.password === password
  );

  if (foundUser) {
    res.json({ 
      success: true, 
      message: 'Login successful!', 
      user: foundUser.username,
      token: 'dummy-token-xyz' 
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Mali ang username o password!' 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
