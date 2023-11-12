const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Autenticar usuario y generar token
async function login(req, res) {
  const { userName, password } = req.body;

  try {
    const user = await User.findOne({ userName, password });

    if (user) {
      const token = jwt.sign({ userName: user.userName }, 'secreto-seguro', { expiresIn: '1h' }); 
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  login
};
